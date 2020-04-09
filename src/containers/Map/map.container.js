import React, {useEffect } from 'react';
import { useWebId } from '@solid/react';
import ReactDOM from 'react-dom';

import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';
import MapaComponent from './map.component';
import Rutas from '../../components/Ruta/rutas';


const fileClien = new fileClient(solidAuth, { enableLogging: true });

const LoadRoute = () => {
    var user = useWebId();

    useEffect(() => {
        if (user !== undefined) {
            const url = user.split("profile/card#me")[0] + "viade";
            //const url = "https://uo264354.solid.community/public/myRoutes";
            //console.log(url);
            loadRoutes(url);
        }
    }, [user]);

    return (<div id = "mapComponent"><h2 id="porcentaje">Porcentaje: 0 %</h2></div>)
}

async function loadRoutes(url) {
    let routes = await fileClien.readFolder(url + "/routes");
    let i;
    
    let rutasJson = [];
   
    if(routes.files.length === 0){
        let rutas = new Rutas(rutasJson);
        try {
            ReactDOM.render(<MapaComponent { ... {rutas}}></MapaComponent>, document.getElementById('mapComponent'));
          }
          catch(error) {
              return;
          }
          
                   
    }

    for (i = 0; i < routes.files.length; i++) {
        var count= 0;
        if (routes.files[i].name.includes('.json') || routes.files[i].name.includes('.jsonld')) {
            console.log(count);
            // eslint-disable-next-line
            fileClien.readFile(url + "/routes/" + routes.files[i].name).then((file) => { 
                rutasJson.push(JSON.parse(file));
                count += 1;
                try {
                    document.getElementById('porcentaje').textContent = "Porcentaje: " + Math.trunc((count) / routes.files.length * 100)  + " %";
                  }
                  catch(error) {
                    return;
                  }
                if(Math.trunc((count) / routes.files.length * 100) === 100) {
                    let rutas = new Rutas(rutasJson);
                    try {
                        ReactDOM.render(<MapaComponent { ... {rutas}}></MapaComponent>, document.getElementById('mapComponent'));
                      }
                      catch(error) {
                        return;
                      }
                }
            }
            );
        } else{
            try {
                document.getElementById('porcentaje').textContent = "Porcentaje: " + Math.trunc((count) / routes.files.length * 100) + " %";
              }
              catch(error) {
                return;
              }
            count += 1;
        }
        
        
    }
}

class Map extends React.Component{
    render(){
        return <LoadRoute></LoadRoute>
    }
}

export default Map;