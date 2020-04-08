import React, { useState, useEffect } from 'react';
import { useWebId } from '@solid/react';
import ReactDOM from 'react-dom';

import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';


const fileClien = new fileClient(solidAuth, { enableLogging: true });
var rutas = [];
const LoadRoute = () => {

    const [setFolders] = useState([]);
    const [selected] = useState({
        name: '',
        description: '',
        images: [],
        videos: []
    });

    console.log(selected);


    var user = useWebId();

    useEffect(() => {
        if (user !== undefined) {
            const url = user.split("profile/card#me")[0] + "prueba2";
            //listRoutes(url);
            loadRoutes(url, setFolders);
        }
    }, [user]);
    return (<div id="prueba">
        <button onClick={LoadRoute}></button>
    </div>)

}

async function loadRoutes(url) {
    let folder = await fileClien.readFolder(url);


    let i;
    for (i = 0; i < folder.files.length; i++) {
        if (folder.files[i].name.includes('.png')) {
            let messageNoRutas = <img src={url + "/" + folder.files[i].name} alt = "A" />
            ReactDOM.render(messageNoRutas, document.getElementById('prueba'));
        } else if (folder.files[i].name.includes('.json')) {
            fileClien.readFile(url + "/" + folder.files[i].name).then((file) => {
                console.log(JSON.parse(file));
                rutas.push(JSON.parse(file));
            }
            );
        }
    }
}

export default LoadRoute;