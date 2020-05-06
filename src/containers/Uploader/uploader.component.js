import React, { Fragment, useState } from 'react';
import { useWebId } from '@solid/react';

import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';

import { UploaderWrapper, UploaderCard, ShareCard, FormCard, MultimediaCard, MultimediasCard, ChooseButton, UploadButton } from './uploader.style';
import { useTranslation } from 'react-i18next';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import createFolder from './../../utils/uploadRoute'

const fileClien = new fileClient(solidAuth, { enableLogging: true });
var publico = false;

const UploadJson = ({ setFile, file }) => {

	const { t } = useTranslation();
	const filename = file == null ? '' : t('uploader.selectedFiles') + file.name;
	const changeName = e => {
		setFile(e.target.files[0]);
	}
	return (
		<div>
			<ChooseButton>
				<div>
					<h2>{t('uploader.chooseJSON')}</h2>
					<center>
						<input value={null} type="file" className="custom-file-input" id="route" accept=".json,.geojson,.jsonld" onChange={changeName} required />
						<label id="label-input" htmlFor="route">
							<span>{t('uploader.choose')}</span>
						</label>
						<h3 className="custom-file-label" id="nameRoute"> {filename}</h3>
					</center>
				</div>
			</ChooseButton>
		</div>
	);
};

const Formulario = () => {
	var user = "" + useWebId();
	//it saves the actual state of the data
	const [file, setFile] = useState(null);
	const [image, setImage] = useState(null);
	const [video, setVideo] = useState(null);
	const folder = "viade";

	const url = user.split("profile/card#me")[0];
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
	function clickButtom() {
		if (publico) {
			publico = false;
		}
		else {
			publico = true;
		}
	}

	const clear = () =>{
		setFile(null);
		setImage(null);
		setVideo(null);
		document.getElementById('photo').value = null;
		document.getElementById('video').value = null;
		document.getElementById('route').value = null;
		document.getElementById('cbox1').checked = false;
		publico = false;
}

	const { t } = useTranslation();
	return (
		<div>
			<br></br>
			<FormCard>
				<UploadJson setFile={setFile} file={file} />
			</FormCard>

			<FormCard>
				<div><h2>{t('uploader.chooseMediaFiles')}</h2></div>
				<MultimediasCard>
					<MultimediaCard>
						<div className="form-group">
							<h3 htmlFor="photo" className="labelPhoto">{t('uploader.selectImages')}</h3>
							<ChooseButton>
								<center>
									<input value={null} type="file" id="photo" name="image" accept=".png,.jpeg,.jpg" multiple={true} onChange={(e) => { setImage(e.target.files) }} />
									<label id="label-input" htmlFor="photo">
										<span>{t('uploader.chooseImages')}</span>
									</label>
								</center>
							</ChooseButton>
							<div id="file-container-photo">
								<h3 id="header-file-container-photo">{t('uploader.selectedFilesPhoto')}</h3>
								<ul id="photo-list"></ul>
							</div>
						</div>
					</MultimediaCard>
					<MultimediaCard>
						<div className="form-group">
							<h3 htmlFor="video" className="labelVideo">{t('uploader.selectVideos')}</h3>
							<ChooseButton>
								<center>
									<input value={null} type="file" id="video" name="video" accept=".mp4,.avg" multiple={true} onChange={(e) => setVideo(e.target.files)} />
									<label id="video-input" htmlFor="video">
										<span>{t('uploader.chooseVideos')}</span>
									</label>
								</center>
							</ChooseButton>
							<div id="file-container-video">
								<h3 id="header-file-container-video">{t('uploader.selectedFilesVideo')}</h3>
								<ul id="video-list"></ul>
							</div>
						</div>
					</MultimediaCard>
				</MultimediasCard>
			</FormCard>
			<ShareCard>
				<div><h2>{t('uploader.share')}</h2></div>
				<div className="flex-container">
					<h3 htmlFor="cbox1">{t('uploader.accept')}</h3>
					<input type="checkbox" id="cbox1" value="first_checkbox" onChange={clickButtom}></input>
				</div>
			</ShareCard>

			<br></br>

			<center>
				<UploadButton>
					<button onClick={() => {
						if (file !== null) {
							read(file, function (json) {
							if (publico) createFolder(fileClien,url + "public/" + folder,json, file.name, image, video,true,showSuccessUploadFile,showErrorUploadFile,clear)
							else createFolder(fileClien,url + folder, json, file.name, image, video,true,showSuccessUploadFile,showErrorUploadFile,clear)
							});
						} else {
							showErrorUploadFile(t('uploader.chooseJSONFile'));
						}
					}} className="btn btn-info" >{t('uploader.addRoute')}
					</button>
				</UploadButton>
			</center>
		</div>
	);
};

	
function read(file, callback) {
	var reader = new FileReader();

	reader.onload = function () {
		callback(JSON.parse(reader.result));
	}

	reader.readAsText(file);
}

const AddRoute = () => {
	const { t } = useTranslation();
	return (
		<UploaderWrapper>
			<UploaderCard className="card">
				<Fragment>
					<h1>{t('uploader.addRoute')}</h1>
					<Formulario />
				</Fragment>
			</UploaderCard>
		</UploaderWrapper>
	);
};

const showErrorUploadFile = (name) => {
	toast.error(name, {
		delay: 1000,
		autoClose: false,
		position: toast.POSITION.TOP_CENTER
	});
}

const showSuccessUploadFile = (name) => {

	//https://github.com/fkhadra/react-toastify
	toast.success(name, {
		delay: 1000,
		autoClose: false,
		position: toast.POSITION.TOP_CENTER
	});
}


export default AddRoute;