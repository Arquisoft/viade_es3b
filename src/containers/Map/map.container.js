import React, { useEffect } from 'react';
import { useWebId } from '@solid/react';
import ReactDOM from 'react-dom';

import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';
import MapaComponent from './map.component';
import Rutas from '../../components/Ruta/rutas';

import { H2Format, InformationSection, ButtonsCard } from './map.style';


const fileClien = new fileClient(solidAuth, { enableLogging: true });

const LoadRoute = (props) => {
    var folder;
    var user;
    var share = false;
    if (props.user === undefined) {
        folder = "viade";
        user = useWebId();
    }
    else if (props.user === "public") {
        folder = "public/viade";
        user = useWebId();
        share = true;
    } else {
        share = undefined;
        folder = "public/viade";
        user = props.user;
    }


    useEffect(() => {
        if (user !== undefined) {
            const url = user.split("profile/card#me")[0] + folder;

            loadRoutes(url, user, share, props.name);
        }
    }, [user]);

    return (<InformationSection id="mapComponent"><H2Format id="porcentaje">Cargando: 0 %</H2Format></InformationSection>)
}

async function loadRoutes(url, user, share, name) {

    if (!await fileClien.itemExists(url)){
    console.log("BIne");
        try {
            ReactDOM.render(<H2Format>No hay rutas</H2Format>, document.getElementById('mapComponent'));
            return;
        }
        catch (error) {
            return;
        }
    }

    let routes = await fileClien.readFolder(url + "/routes");
    let rutasJson = [];
    let commentsJson = [];
    let fileName = [];

    if (routes.files.length === 0) {
        try {
            ReactDOM.render(<H2Format>No hay rutas</H2Format>, document.getElementById('mapComponent'));
        }
        catch (error) {
            return;
        }
    }
    var count = 0;


    for (let i = 0; i < routes.files.length; i++) {
        if (routes.files[i].name.includes('.json') || routes.files[i].name.includes('.jsonld') || routes.files[i].name.includes('.geojson')) {
            // eslint-disable-next-line
            fileClien.readFile(url + "/routes/" + routes.files[i].name).then((file) => {
                fileClien.readFile(url + "/comments/routeComments/" + routes.files[i].name.split('.json')[0] + "Comments.json").then((fileComment) => {
                    commentsJson.push(JSON.parse(fileComment));
                    rutasJson.push(JSON.parse(file));
                    fileName.push(routes.files[i].name);
                    count += 1;
                    updatePercent(count, routes.files.length);
                    if (count === routes.files.length) {
                        loadMapView(new Rutas(rutasJson, commentsJson, fileName, share), user, name);
                    }

                });
            });
        } else {
            count += 1;
            updatePercent(count, routes.files.length);
            if (count === routes.files.length) {
                if (!rutasJson.length === 0) {
                    loadMapView(new Rutas(rutasJson, commentsJson, fileName, share), user, name);
                }

                else
                    ReactDOM.render(<H2Format>No hay rutas</H2Format>, document.getElementById('mapComponent'));
            }
        }
    }
}

function loadMapView(rutas, user,name) {
    setTimeout(() => {
        try {
            ReactDOM.render(<MapaComponent {... { rutas, user, name}}></MapaComponent>, document.getElementById('mapComponent'))
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


const Map = (props) => {
    let user = props.user;
    let name = props.name;
    if (user === undefined) {
        user = "public";
        return (<InformationSection id="mapComponent">
            
            <ButtonsCard>
            <center><h1>Elija el tipo de rutas que desea ver</h1></center>
            
            <button onClick={() => ReactDOM.render(<LoadRoute {...{ user }}></LoadRoute>, document.getElementById('mapComponent'))}>Compartidas</button>
            <button onClick={() => ReactDOM.render(<LoadRoute></LoadRoute>, document.getElementById('mapComponent'))}>Privadas</button>
            
            </ButtonsCard>
        </InformationSection>)
    }
    return <LoadRoute {...{ user, name }}></LoadRoute>
}

export default Map;