import React, { useState, useEffect } from 'react';
import { useWebId } from '@solid/react';
import ReactDOM from 'react-dom';

import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';

const fileClien = new fileClient(solidAuth, { enableLogging: true });
var rutas = [];
const LoadRoute = () => {

    const [folders, setFolders] = useState([]);
    const [selected, setSelected] = useState({
        name: '',
        description: '',
        images: [],
        videos: []
    });

    console.log(selected);


    var user = useWebId();

    useEffect(() => {
        if (user != undefined) {
            const url = user.split("profile/card#me")[0] + "prueba2";
            //listRoutes(url);
            loadRoutes(url, setFolders);
        }
    }, [user]);
    return (<div id = "prueba">
        <button onClick={LoadRoute}></button>
        </div>)
    
};

async function loadRoutes(url) {
    let folder = await fileClien.readFolder(url);
   

    let i = 0;
    for (i = 0 ; i < folder.files.length; i ++){
        console.log(folder.files[i].name);
        console.log(folder.files[i]);
        if(folder.files[i].name.includes('.png')){
            let messageNoRutas = <img src = { url + "/" +folder.files[i].name} />
            ReactDOM.render(messageNoRutas, document.getElementById('prueba'));
            loadJson(url + "/" +folder.files[i].name);
        }
    }
}

function loadJson(file){
    var aux = fileClien.get(file);
    setTimeout(() => { console.log(aux)}, 2000);
    setTimeout(() => { console.log(aux)}, 2000);
    
}

async function l(urlCarptetaRuta, route) {
    var k;
    var result = [];
    for (k = 0; k < 1000; k++) {
        try {
            await fileClien.readFile(urlCarptetaRuta + route + (k + 1));
            result.push(urlCarptetaRuta + route + (k + 1))
        } catch{
            k = 1000;
        }
    }
    return result;
}



export default LoadRoute;