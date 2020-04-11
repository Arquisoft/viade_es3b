import React, { Fragment, useState } from 'react';
import { useWebId } from '@solid/react';

import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';

import { UploaderWrapper, UploaderCard, FormCard, MultimediaCard, MultimediasCard, ChooseButton, UploadButton } from './uploader.style';
import { useTranslation } from 'react-i18next';



const fileClien = new fileClient(solidAuth, { enableLogging: true });

const UploadJson = ({ setFile, file }) => {
	const filename = file == null ? '' : "Ha seleccionado el siguiente archivo:" + file.name;
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

	const url = user.split("profile/card#me")[0] + folder;
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

			<br></br>
			<center>
				<UploadButton>
					<button onClick={() => createFolder(url, file, image, video, setFile, setImage, setVideo)} class="btn btn-info" >Add route
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


const createFolder = async (folder, file, photo, video, setFile, setImage, setVideo) => {
	let existe = await fileClien.itemExists(folder);
	if (!existe) {
		await fileClien.createFolder(folder);
	}
	let i = 0;

	await fileClien.createFile(folder + "/routes/" + file.name, file, file.type);
	await fileClien.createFile(folder + "/comments/routeComments/" + file.name.split('.json')[0] + "Comments.json", getJson(), file.type);

	for (i = 0; photo != null && i < photo.length; i++) {
		fileClien.createFile(folder + "/resources/" + photo[i].name, photo[i], "image/png");
	}

	for (i = 0; video != null && i < video.length; i++) {
		fileClien.createFile(folder + "/resources/" + video[i].name, video[i], "video/mp4");
	}

	alert("La ruta se ha añadido con exito!");

	setFile(null);
	setImage(null);
	setVideo(null);

	document.getElementById('photo').value = null;
	document.getElementById('video').value = null;
	document.getElementById('route').value = null;
}

export default AddRoute;