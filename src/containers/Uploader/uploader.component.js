import React, { Fragment, useState } from 'react';
import { useWebId } from '@solid/react';

import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';

import { UploaderWrapper, UploaderCard, ShareCard, FormCard, MultimediaCard, MultimediasCard, ChooseButton, UploadButton } from './uploader.style';
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
					<h2>{t('uploader.chooseJSON')}</h2>
					<center>

						<input value="" type="file" className="custom-file-input" id="route" accept=".json,.geojson,.jsonld" onChange={changeName} required />
						<label id="label-input" htmlFor="route">
							<span>{t('uploader.choose')}</span>
						</label>
						<h4 className="custom-file-label" id="nameRoute"> {filename}</h4>
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
									<input value="" type="file" id="photo" name="image" accept=".png,.jpeg,.jpg" multiple={true} onChange={(e) => setImage(e.target.files)} />
									<label id="label-input" htmlFor="photo">
										<span>{t('uploader.chooseImages')}</span>
									</label>
								</center>

							</ChooseButton>
						</div>
					</MultimediaCard>
					<MultimediaCard>
						<div className="form-group">
							<h3 htmlFor="video" className="labelVideo">{t('uploader.selectVideos')}</h3>
							<ChooseButton>
								<center>
									<input value="" type="file" id="video" name="video" accept=".mp4,.avg" multiple={true} onChange={(e) => setVideo(e.target.files)} />
									<label id="video-input" htmlFor="video">
										<span>{t('uploader.chooseVideos')}</span>
									</label>
								</center>
							</ChooseButton>
						</div>
					</MultimediaCard>
				</MultimediasCard>
			</FormCard>
			<ShareCard>
				<div><h2>{t('uploader.share')}</h2></div>
				<div class="flex-container">
					<h3 htmlFor="cbox1">{t('uploader.accept')}</h3>
					<input type="checkbox" id="cbox1" value="first_checkbox" onChange={clickButtom}></input>
				</div>
			</ShareCard>

			<br></br>

			<center>
				<UploadButton>
					<button onClick={() => {
						if (file !== null) {
							if (publico) createFolder(url + "public/" + folder, file, image, video, setFile, setImage, setVideo)
							else createFolder(url + folder, file, image, video, setFile, setImage, setVideo)
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

function a(a){
	console.log(a);
	var b = JSON.parse(a);
	console.log(b.description)
}


const createFolder = async (folder, file, photo, video, setFile, setImage, setVideo) => {
	let reader = new FileReader();
	reader.onloadend = () => a(reader.result);
	reader.readAsText(file, 'ISO-8859-1');

	

	/*let existe = await fileClien.itemExists(folder);
	if (!existe) {
		await fileClien.createFolder(folder);
	}
	let i = 0;


	await fileClien.createFile(folder + "/routes/" + file.name, file, file.type);
	await fileClien.createFile(folder + "/comments/routeComments/" + file.name.split('.json')[0] + "Comments.json", getJson(), file.type);

	for (i = 0; photo != null && i < photo.length; i++) {
		if (fileClien.createFile(folder + "/resources/" + photo[i].name, photo[i], photo[i].type)) {
			showSuccessUploadFile("La foto " + photo[i].name + " ha sido subida correctamente");
		} else {
			showErrorUploadFile("La foto " + photo[i].name + " ha sido subida correctamente");
		}
	}

	for (i = 0; video != null && i < video.length; i++) {
		if (fileClien.createFile(folder + "/resources/" + video[i].name, video[i], "video/mp4")) {
			showSuccessUploadFile("El vídeo " + video[i].name + " ha sido subido correctamente");
		} else {
			showErrorUploadFile("El vídeo" + video[i].name + " ha sido subido correctamente");
		}
	}
	showSuccessUploadFile("Ruta " + file.name);
	setFile(null);
	setImage(null);
	setVideo(null);
	document.getElementById('photo').value = null;
	document.getElementById('video').value = null;
	document.getElementById('route').value = null;
	publico = false;*/
}

export default AddRoute;