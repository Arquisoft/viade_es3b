import React, { Fragment, useState } from 'react';
import { useWebId } from '@solid/react';

import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';

import { UploaderWrapper, UploaderCard, FormCard, MultimediaCard, MultimediasCard, ChooseButton, UploadButton } from './uploader.style';
import { useTranslation } from 'react-i18next';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fileClien = new fileClient(solidAuth, { enableLogging: true });
var publico = false;

const UploadJson = ({ setFile, file }) => {
	const filename = file == null ? '' : "Archivo seleccionado:" + file.name;
	const { t } = useTranslation();
	const changeName = e => {
		setFile(e.target.files[0]);
	}



	return (
		<div>
			<ChooseButton>
				<div>
					<h2>Escoja un archivo JSON</h2>
					<center>

						<input value={null} type="file" class="custom-file-input" id="route" accept=".json" onChange={changeName} required />
						<label id="label-input" for="route">
							<span>{t('uploader.choose')}</span>
						</label>
						<h4 class="custom-file-label" id="nameRoute"> {filename}</h4>
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

	function clickButtom() {
		if (publico) {
			publico = false;
		}
		else {
			publico = true;
		}
	}

	return (
		<div>
			<br></br>
			<FormCard>
				<UploadJson setFile={setFile} file={file} />
			</FormCard>
			
			<FormCard>
				<div><h2>Escoja los archivos multimedia que desee</h2></div>
				<MultimediasCard>
					<MultimediaCard>
						<div class="form-group">
							<h3 for="photo" class="labelPhoto">Seleccione las imágenes</h3>
							<ChooseButton>
								<center>
									<input value={null} type="file" id="photo" name="image" accept=".png" multiple="true" onChange={(e) => setImage(e.target.files)} />
									<label id="label-input" for="photo">
										<span>Elegir fotos</span>
									</label>
								</center>

							</ChooseButton>
						</div>
					</MultimediaCard>
					<MultimediaCard>
						<div class="form-group">
							<h3 for="video" class="labelVideo">Seleccione los vídeos</h3>
							<ChooseButton>
								<center>
									<input value={null} type="file" id="video" name="video" accept=".mp4" multiple="true" onChange={(e) => setVideo(e.target.files)} />
									<label id="video-input" for="video">
										<span>Elegir videos</span>
									</label>
								</center>
							</ChooseButton>
						</div>
					</MultimediaCard>
				</MultimediasCard>
			</FormCard>
			<FormCard>
				<h3>Compartir</h3>
				<input type="checkbox" id="cbox1" value="first_checkbox" onChange={clickButtom}></input>
			</FormCard>

			<br></br>

			<center>
				<UploadButton>
					<button onClick={() => {
						createFolder(url + folder, file, image, video, setFile, setImage, setVideo, false)
						if (publico) createFolder(url + "public/" + folder, file, image, video, setFile, setImage, setVideo, true)
					}} class="btn btn-info" >Add route
                </button>
				</UploadButton>
			</center>
		</div>
	);
};

const AddRoute = () => {
	const { t } = useTranslation();
	return (
		<UploaderWrapper>
			<UploaderCard className="card">
				<Fragment>
					<h1 class="h2">{t('uploader.addRoute')}</h1>
					<Formulario />
				</Fragment>
			</UploaderCard>
		</UploaderWrapper>

	);

};

const showErrorUploadFile = (name) => {
	toast.error(name + " no se ha subido correctamente", {
		delay: 1000,
		autoClose: false,
		position: toast.POSITION.TOP_CENTER
	});
}

const showSuccessUploadFile = (name) => {
	//https://github.com/fkhadra/react-toastify
	toast.success(name + " se ha subido correctamente", {
		delay: 1000,
		autoClose: false,
		position: toast.POSITION.TOP_CENTER
	});
}

function getJson() {
	var obj = ({
		"@context": {
			"@version": 1.1,
			"comments": {
				"@container": "@list",
				"@id": "viade:comments"
			},
			"dateCreated": {
				"@id": "viade:dateCreated",
				"@type": "xsd:date"
			},
			"text": {
				"@id": "viade:text",
				"@type": "xsd:string"
			},
			"viade": "http://arquisoft.github.io/viadeSpec/",
			"xsd": "http://www.w3.org/2001/XMLSchema#"
		}, "comments": []
	});

	return JSON.stringify(obj);

}


const createFolder = async (folder, file, photo, video, setFile, setImage, setVideo, bool) => {
	let existe = await fileClien.itemExists(folder);
	if (!existe) {
		await fileClien.createFolder(folder);
	}
	let i = 0;


	await fileClien.createFile(folder + "/routes/" + file.name, file, file.type);
	await fileClien.createFile(folder + "/comments/routeComments/" + file.name.split('.json')[0] + "Comments.json", getJson(), file.type);

	for (i = 0; photo != null && i < photo.length; i++) {

		if (fileClien.createFile(folder + "/resources/" + photo[i].name, photo[i], "image/png")) {
			showSuccessUploadFile("La photo " + photo[i].name);
		} else {
			showErrorUploadFile("La photo" + photo[i].name);
		}
	}

	for (i = 0; video != null && i < video.length; i++) {
		if (fileClien.createFile(folder + "/resources/" + video[i].name, video[i], "video/mp4")) {
			showSuccessUploadFile("El video" + video[i].name);
		} else {
			showErrorUploadFile("El video" + video[i].name);
		}
	}

	showSuccessUploadFile("Ruta " + file.name);



	console.log(bool + "-" + publico)
	if (bool === publico) {
		setFile(null);
		//setImage(null);
		//setVideo(null);
		document.getElementById('photo').value = null;
		document.getElementById('video').value = null;
		document.getElementById('route').value = null;
		publico = false;
	}


}

export default AddRoute;