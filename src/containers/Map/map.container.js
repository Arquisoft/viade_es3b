import React, { useEffect } from 'react';
import { useWebId } from '@solid/react';
import ReactDOM from 'react-dom';

import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';
import MapaComponent from './map.component';
import Rutas from '../../components/Ruta/rutas';

import { H2Format, InformationSection, ButtonsCard } from './map.style';
import { useTranslation } from 'react-i18next';
import checkJson from './../../utils/checkJson'

const fileClien = new fileClient(solidAuth, { enableLogging: true });

const LoadRoute = (props) => {
    const { t } = useTranslation();

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

            loadRoutes(url, user, share, props.name, t);
        }
    }, [user]);

    return (<InformationSection id="mapComponent"><H2Format id="porcentaje">{t('map.loading')}: 0 %</H2Format></InformationSection>)
}

async function loadRoutes(url, user, share, name, t) {

    if (!await fileClien.itemExists(url)) {
        try {
            noRoutesAvailable(t);
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
            noRoutesAvailable(t);
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
                    let json = JSON.parse(file);
                    json = (checkJson(json, file))
                    if (json !== null) {
                        commentsJson.push(JSON.parse(fileComment));
                        rutasJson.push(json);
                        fileName.push(routes.files[i].name);
                    }
                    count += 1;
                    updatePercent(count, routes.files.length, t);
                    if (count === routes.files.length) {
                        loadMapView(new Rutas(rutasJson, commentsJson, fileName, share), user, name);
                    }

                });
            });
        } else {
            count += 1;
            updatePercent(count, routes.files.length, t);
            if (count === routes.files.length) {
                if (!rutasJson.length === 0) {
                    loadMapView(new Rutas(rutasJson, commentsJson, fileName, share), user, name);
                }
                else
                    noRoutesAvailable(t);
            }
        }
    }
}

function loadMapView(rutas, user, name) {
    setTimeout(() => {
        try {
            ReactDOM.render(<MapaComponent {... { rutas, user, name }}></MapaComponent>, document.getElementById('mapComponent'))
        }
        catch (error) {
            return;
        }
    }, 100);
}

function updatePercent(count, length, t) {
    try {
        ReactDOM.render(<H2Format id={"porcentaje" + Math.trunc((count) / length * 100)}>
            {t('map.loading')}  {Math.trunc((count) / length * 100) + " %"}</H2Format>, document.getElementById('mapComponent'))
    }
    catch (error) {
        return;
    }
}

function noRoutesAvailable(t) {
    ReactDOM.render(<H2Format>{t('map.noRoutes')}</H2Format>, document.getElementById('mapComponent'));
}

const Map = (props) => {
    const { t } = useTranslation();
    let user = props.user;
    let name = props.name;
    if (user === undefined) {
        user = "public";
        return (<InformationSection id="mapComponent">

            <ButtonsCard>
                <center><h1>{t('map.chooseRoute')}</h1></center>

                <button id="shared" onClick={() => ReactDOM.render(<LoadRoute {...{ user }}></LoadRoute>, document.getElementById('mapComponent'))}>{t('map.shared')}</button>
                <button id="priavte" onClick={() => ReactDOM.render(<LoadRoute></LoadRoute>, document.getElementById('mapComponent'))}>{t('map.private')}</button>

            </ButtonsCard>
        </InformationSection>)
    }
    return <LoadRoute {...{ user, name }}></LoadRoute>
}

export default Map;