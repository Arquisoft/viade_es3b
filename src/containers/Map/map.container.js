import React, { useEffect } from 'react';
import { useWebId } from '@solid/react';
import ReactDOM from 'react-dom';

import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';
import MapaComponent from './map.component';
import Rutas from '../../components/Ruta/rutas';

import { H2Format, InformationSection, } from './map.style';


const fileClien = new fileClient(solidAuth, { enableLogging: true });

const LoadRoute = () => {
    var user = useWebId();

    useEffect(() => {
        if (user !== undefined) {
            const url = user.split("profile/card#me")[0] + "viade";
            loadRoutes(url);
        }
    }, [user]);

    return (<InformationSection id="mapComponent"><H2Format id="porcentaje">Cargando: 0 %</H2Format></InformationSection>)
}

async function loadRoutes(url) {
    let routes = await fileClien.readFolder(url + "/routes");
    let rutasJson = [];
    let commentsJson = [];
    let fileName =[];
    if (routes.files.length === 0) {
        try {
            ReactDOM.render(<InformationSection id="mapComponent"><H2Format>No hay rutas</H2Format></InformationSection>, document.getElementById('mapComponent'));
        }
        catch (error) {
            return;
        }
    }

    for (let i = 0; i < routes.files.length; i++) {
        var count = 0;
        if (routes.files[i].name.includes('.json') || routes.files[i].name.includes('.jsonld')) {
            // eslint-disable-next-line
            fileClien.readFile(url + "/routes/" + routes.files[i].name).then((file) => {
                fileClien.readFile(url + "/comments/routeComments/" + routes.files[i].name.split('.json')[0] + "Comments.json").then((fileComment) =>{
                    commentsJson.push(JSON.parse(fileComment));
                    rutasJson.push(JSON.parse(file));
                    fileName.push(routes.files[i].name.split('.json')[0]);
                    count += 1;
                    updatePercent(count, routes.files.length);
                    if (Math.trunc((count) / routes.files.length * 100) === 100)
                        loadMapView(new Rutas(rutasJson,commentsJson,fileName));
                });
            });
        } else {
            count += 1;
            updatePercent(count, routes.files.length);
        }
    }
}

function loadMapView(rutas) {
    setTimeout(() => {
        try {
            ReactDOM.render(<MapaComponent {... { rutas }}></MapaComponent>, document.getElementById('mapComponent'))
        }
        catch (error) {
            return;
        }
    }, 100);
}

function updatePercent(count, length) {
    try {
        document.getElementById('porcentaje').textContent = "Cargando: " + Math.trunc((count) / length * 100) + " %";
    }
    catch (error) {
        return;
    }
}

class Map extends React.Component {
    render() {
        return <LoadRoute></LoadRoute>
    }
}

export default Map;