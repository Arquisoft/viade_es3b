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

    photoShow();
	function photoShow() {
		if(image !== null){
            //Muestro el encabezado (Archivos seleccionados)
			document.getElementById('header-file-container-photo').style.display ="initial";
			//Borro lo seleccionado anteriormente
			document.getElementById('file-container-photo').removeChild(document.getElementById('photo-list'));
			var contenedor = document.createElement('ul');
			contenedor.id = 'photo-list';
			//Inserto la lista al div con id=file-container
			document.getElementById('file-container-photo').insertAdjacentElement('beforeend',contenedor);
			for(var i = 0; i < image.length; i++){
				let file = image[i];
				var elemento = document.createElement("li");
				elemento.insertAdjacentText('beforeend', i+1 + "- " + file.name);
				contenedor.insertAdjacentElement('beforeend',elemento);	
			}
			
		}		
	}
	videoShow();
	function videoShow() {
		if(video !== null){
            //Muestro el encabezado (Archivos seleccionados)
			document.getElementById('header-file-container-video').style.display ="initial";
			//Borro lo seleccionado anteriormente
			document.getElementById('file-container-video').removeChild(document.getElementById('video-list'));
			var contenedor = document.createElement('ul');
			contenedor.id = 'video-list';
			//Inserto la lista al div con id=file-container
			document.getElementById('file-container-video').insertAdjacentElement('beforeend',contenedor);
			for(var i = 0; i < video.length; i++){
				let file = video[i];
				var elemento = document.createElement("li");
				elemento.insertAdjacentText('beforeend', i+1 + "- " + file.name);
				contenedor.insertAdjacentElement('beforeend',elemento);	
			}
			
		}		
    }
    
    const clear = () => {
       
            setName(null);
            setDescription(null);
            setImage(null);
            setVideo(null);
            setPoints(null);
            document.getElementById('name').value = null;
            document.getElementById('description').value = null;
            document.getElementById('image').value = null;
            document.getElementById('video').value = null;
            document.getElementById('name').placeholder = "";
            document.getElementById('description').placeholder = "";

            if(ruta === undefined) document.getElementById('cbox1').checked = false;
            publico = false;

            ReactDOM.render(<Map {... { point, updatePoints }}></Map>, document.getElementById('leftMap'));
     
    }

   /* function loadMapView() {
        let name = ruta.name;
        let user = (ruta.shared) ? "public" : undefined;
        ReactDOM.render(<Map {...{ user, name }}></Map>, document.getElementById('mapComponent'));
    }*/

    function updatePoints(point) {
        let newPoints = [];
        point.forEach(p => newPoints.push([p.lat, p.lng]));
        setPoints(point);
    }

    function checkValues(t) {
        if (ruta === undefined) {
            let error = false;

            error = checkString(name, t('route.name')) ? true : error;
            error = checkString(description, t('route.description')) ? true : error;

            console.log(points.length);
            if (points.length === 0) {
                error = true;
                showErrorUploadFile(t('route.error'));
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
                <center><h1>{(ruta === undefined) ? t('route.newRoute') : t('route.editRoute')}</h1></center>
                <InputsCard>
                <center><h2>{t('route.id')}</h2></center>
                <input type="test" id="name" name="name" onChange={(e) => { setName(e.target.value) }} placeholder={(ruta !== undefined) ? ruta.name : ""} />
                <center><h3>{t('route.routeDesc')}</h3></center>
                <input type="test" id="description" name="description" onChange={(e) => { setDescription(e.target.value) }} placeholder={(ruta !== undefined) ? ruta.description : ""} />
                <MultimediasCard>
                    <MultimediaCard>
                        <ChooseButton>
                            <div>
                            <center><h2>{t('uploader.chooseImages')}</h2></center>
                                <center>
                                    <input value={null} type="file" id="image" name="image" accept=".png,.jpeg,.jpg" multiple={true} onChange={(e) => { setImage(e.target.files) }} />
                                    <label id="label-input" htmlFor="image">
                                        <span>{t('uploader.chooseImages')}</span>
                                    </label>
                                </center>
                            </div>
                            
                        </ChooseButton>
                        <div id="file-container-photo">
                                 <h3 id="header-file-container-photo">{t('uploader.selectedFilesPhoto')}</h3>

								<ul id="photo-list"></ul>
							</div>
                    </MultimediaCard>
                    <MultimediaCard>
                        <ChooseButton>
                            <div>
                            <center><h2>{t('uploader.chooseVideos')}</h2></center>
                                <center>
                                    <input value={null} type="file" id="video" name="video" accept=".mp4,.avg" multiple={true} onChange={(e) => setVideo(e.target.files)} />
                                    <label id="video-input" htmlFor="video">
                                        <span>{t('uploader.chooseVideos')}</span>
                                    </label>
                                </center>
                            </div>
                        </ChooseButton>
                        <div id="file-container-video">
                                <h3 id="header-file-container-video">{t('uploader.selectedFilesVideo')}</h3>
								<ul id="video-list"></ul>
							</div>
                    </MultimediaCard>
                </MultimediasCard>
                <br></br>
                {(ruta === undefined) ?
                    <ShareCard>
                        <div className="flex-container">
                        <center><h3 htmlFor="cbox1">{t('uploader.share')}</h3></center>
                            <input type="checkbox" id="cbox1" value="first_checkbox" onChange={(e) => publico = !publico}></input>
                        </div>
                    </ShareCard>
                    : <></>}

                <br></br>
                </InputsCard>
                <button id="btEdit" onClick={() => {
                    if (!checkValues(t)) {
                        let json = getJsonRoute(name, description, user, points, media, waypoints)
                        let nameFile = (ruta !== undefined) ? ruta.fileName : name.trim() + ".json"
                        if(ruta !== undefined) publico = ruta.shared;
                        if (publico) createFolder(fileClien, url + "public/" + folder, json, nameFile, image, video, updateComment, showSuccessUploadFile, showErrorUploadFile, clear)
                        else createFolder(fileClien, url + folder, json, nameFile, image, video, updateComment, showSuccessUploadFile, showErrorUploadFile, clear)
                    }
                }}>{(ruta === undefined) ? t('route.newRoute') : t('route.editRoute')}</button>
            </FormCard>
        </NewRouteSection>
        <MapSection id="leftMap">
            <Map {... { point, updatePoints }}></Map>
        </MapSection>
    </NewRouteWrapper>)
}

export default NewRoute;
