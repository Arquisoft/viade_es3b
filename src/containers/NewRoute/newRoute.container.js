import Map from './newRoute.componet'
import React, { useState } from 'react';
import { NewRouteWrapper, InputsCard, MapSection, NewRouteSection, FormCard, ChooseButton, MultimediaCard, MultimediasCard, ShareCard } from './newRoute.style';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import createFolder from './../../utils/uploadRoute'
import getJsonRoute from './../../utils/defaultJsonRoute'
import fileClient from 'solid-file-client';
import * as solidAuth from 'solid-auth-client';
import { useWebId } from '@solid/react';
import ReactDOM from 'react-dom';


const NewRoute = (props) => {
    const ruta = props.currentRuta;
    const point = []
    if (ruta !== undefined) ruta.points.forEach(p => { point.push(p.getCoordinates()); });
    const waypoints = (ruta !== undefined) ? ruta.waypoints : []
    const media = (ruta !== undefined) ? ruta.meida : []
    const updateComment = (ruta === undefined) ? true : false;
    const user = "" + useWebId();
    const folder = "viade";
    const url = user.split("profile/card#me")[0];

    const fileClien = new fileClient(solidAuth, { enableLogging: true });
    let publico = false;

    const [name, setName] = (ruta !== undefined) ? useState(ruta.name) : useState(null);
    const [description, setDescription] = (ruta !== undefined) ? useState(ruta.description) : useState(null);
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [points, setPoints] = useState(point);
    const { t } = useTranslation();



    const clear = () => {
        /*if (ruta !== undefined) loadMapView();
        else {
            setName(null);
            setDescription(null);
            setImage(null);
            setVideo(null);
            setPoints(null);
            document.getElementById('name').value = null;
            document.getElementById('description').value = null;
            document.getElementById('image').value = null;
            document.getElementById('video').value = null;

            document.getElementById('cbox1').checked = false;
            publico = false;

            ReactDOM.render(<Map {... { point, updatePoints }}></Map>, document.getElementById('leftMap'));
        }
*/
    }

    function loadMapView() {
        let name = ruta.name;
        let user = (ruta.shared) ? "public" : undefined;
        ReactDOM.render(<Map {...{ user, name }}></Map>, document.getElementById('mapComponent'));
    }


    function updatePoints(point) {
        let newPoints = [];
        point.forEach(p => newPoints.push([p.lat, p.lng]));
        setPoints(point);
    }



    function checkValues() {
        if (ruta === undefined) {
            let error = false;

            error = checkString(name, "El nombre no puede estar vacio") ? true : error;
            error = checkString(description, "La descripción no puede estar vacia") ? true : error;

            console.log(points.length);
            if (points.length === 0) {
                error = true;
                showErrorUploadFile("La ruta debe tener al menos un punto")
            }

            return error;
        }
        return checkName();

    }

    const checkName = () => {
        if (name === null) {
            setName(ruta.name);

        } else if (name.length === 0) {
            setName(ruta.name);
        }

        if (description === null) {
            setDescription(ruta.description);

        } else if (description.length === 0) {
            setDescription(ruta.description);
        }

        if(points.length === 0){
            setPoints(point)
        }
        return false;
    }

    const checkString = (value, message) => {
        if (value === null) {
            showErrorUploadFile(message);
            return true;
        }
        if (value.length === 0) {
            showErrorUploadFile(message);
            return true;
        }
        return false;
    }

    const showErrorUploadFile = (name) => {
        toast.error(name, {

            autoClose: false,
            position: toast.POSITION.TOP_CENTER
        });
    }

    const showSuccessUploadFile = (name) => {
        //https://github.com/fkhadra/react-toastify
        toast.success(name, {

            autoClose: false,
            position: toast.POSITION.TOP_CENTER
        });
    }




    return (<NewRouteWrapper>
        
        <NewRouteSection>
            <FormCard>
                <h1>{(ruta === undefined) ? "Crear nueva ruta" : "Editar ruta"}</h1>
                <InputsCard>
                <h2>Nombre</h2>
                <input type="test" id="name" name="name" onChange={(e) => { setName(e.target.value) }} placeholder={(ruta !== undefined) ? ruta.name : ""} />
                <h3>Descripcion</h3>
                <input type="test" id="description" name="description" onChange={(e) => { setDescription(e.target.value) }} placeholder={(ruta !== undefined) ? ruta.description : ""} />
                <MultimediasCard>
                    <MultimediaCard>
                        <ChooseButton>
                            <div>
                                <h2>Seleccione fotos</h2>
                                <center>
                                    <input value={null} type="file" id="image" name="image" accept=".png,.jpeg,.jpg" multiple={true} onChange={(e) => { setImage(e.target.files) }} />
                                    <label id="label-input" htmlFor="image">
                                        <span>{t('uploader.chooseImages')}</span>
                                    </label>
                                </center>
                            </div>
                        </ChooseButton>
                    </MultimediaCard>
                    <MultimediaCard>
                        <ChooseButton>
                            <div>
                                <h2>Seleccione videos</h2>
                                <center>
                                    <input value={null} type="file" id="video" name="video" accept=".mp4,.avg" multiple={true} onChange={(e) => setVideo(e.target.files)} />
                                    <label id="video-input" htmlFor="video">
                                        <span>{t('uploader.chooseVideos')}</span>
                                    </label>
                                </center>
                            </div>
                        </ChooseButton>
                    </MultimediaCard>
                </MultimediasCard>
                <br></br>
                {(ruta === undefined) ?
                    <ShareCard>
                        <div className="flex-container">
                            <h3 htmlFor="cbox1">Compartir</h3>
                            <input type="checkbox" id="cbox1" value="first_checkbox" checked={(ruta !== undefined) ? ruta.shared : false} onChange={() => publico = !publico}></input>
                        </div>
                    </ShareCard>
                    : <></>}

                <br></br>
                </InputsCard>
                <button id="btEdit" onClick={() => {
                    if (!checkValues()) {
                        let json = getJsonRoute(name, description, user, points, media, waypoints)
                        let nameFile = (ruta !== undefined) ? ruta.fileName : name.trim() + ".json"
                        if (publico) createFolder(fileClien, url + "public/" + folder, json, nameFile, image, video, updateComment, showSuccessUploadFile, showErrorUploadFile, clear)
                        else createFolder(fileClien, url + folder, json, nameFile, image, video, updateComment, showSuccessUploadFile, showErrorUploadFile, clear)
                    }
                }}>{(ruta === undefined) ? "Crear" : "Editar"}</button>
            </FormCard>
        </NewRouteSection>
        <MapSection id="leftMap">
            <Map {... { point, updatePoints }}></Map>
        </MapSection>
    </NewRouteWrapper>)
}

export default NewRoute;


