import React, {useEffect } from 'react';
import { useWebId } from '@solid/react';
import ReactDOM from 'react-dom';

import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';
import MapaComponent from './map.component';
import Rutas from '../../components/Ruta/rutas';
//import Ruta from '../../components/Ruta/ruta';

const fileClien = new fileClient(solidAuth, { enableLogging: true });

const LoadRoute = () => {
    var user = useWebId();

    useEffect(() => {
        if (user !== undefined) {
            const url = user.split("profile/card#me")[0] + "viade";
            console.log(url);
            //const url = "https://uo264354.solid.community/public/myRoutes";
            //console.log(url);
            loadRoutes(url);
        }
    }, [user]);

    return (<div id = "mapComponent"><h2 id="porcentaje">Porcentaje: 0 %</h2></div>)
}

async function loadRoutes(url) {
    //let folder = await fileClien.readFolder(url);
    let routes = await fileClien.readFolder(url + "/routes");
    //let resources = await fileClien.readFolder(url + "/resources");
    let i;
    let count= 0;
    let rutasJson = [];
   
    if(routes.files.length == 0){
        let rutas = new Rutas(rutasJson);
                    ReactDOM.render(<MapaComponent { ... {rutas}}></MapaComponent>, document.getElementById('mapComponent'));
    }

    for (i = 0; i < routes.files.length; i++) {
        if (routes.files[i].name.includes('.json') || routes.files[i].name.includes('.jsonld')) {
            fileClien.readFile(url + "/routes/" + routes.files[i].name).then((file) => {
                rutasJson.push(JSON.parse(file));
                count += 1;
                document.getElementById('porcentaje').textContent = "Porcentaje: " + Math.trunc((count) / routes.files.length * 100)  + " %";
                if(Math.trunc((count) / routes.files.length * 100) === 100) {
                    let rutas = new Rutas(rutasJson);
                    ReactDOM.render(<MapaComponent { ... {rutas}}></MapaComponent>, document.getElementById('mapComponent'));
                }
            }
            );
        } else{
            document.getElementById('porcentaje').textContent = "Porcentaje: " + Math.trunc((count) / routes.files.length * 100) + " %";
            count += 1;
        }
        
    }
    /*for (i = 0; i < folder.files.length; i++) {
        if (folder.files[i].name.includes('.png') || folder.files[i].name.includes('.jpg')) {
            count += 1;
            document.getElementById('porcentaje').textContent = "Porcentaje: " + Math.trunc((count) / folder.files.length * 100)  + " %";
        } else if (folder.files[i].name.includes('.jsonld') || folder.files[i].name.includes('.jsonld')) {
            fileClien.readFile(url + "/" + folder.files[i].name).then((file) => {
                rutasJson.push(JSON.parse(file));
                count += 1;
                document.getElementById('porcentaje').textContent = "Porcentaje: " + Math.trunc((count) / folder.files.length * 100)  + " %";
                if(Math.trunc((count) / folder.files.length * 100) === 100) {
                    let rutas = new Rutas(rutasJson);
                    ReactDOM.render(<MapaComponent { ... {rutas}}></MapaComponent>, document.getElementById('mapComponent'));
                }
            }
            );
        } else{
            document.getElementById('porcentaje').textContent = "Porcentaje: " + Math.trunc((count) / folder.files.length * 100) + " %";
            count += 1;
        }
        
    }*/
}

class Map extends React.Component{
    render(){
        return <LoadRoute></LoadRoute>
    }
}

export default Map;