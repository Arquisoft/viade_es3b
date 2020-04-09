import React, { Fragment, useState } from 'react';
import { useWebId } from '@solid/react';

import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';

import { UploaderWrapper, UploaderCard, FormCard, MultimediaCard, ChooseButton, UploadButton, FileNames, FilesContainer } from './uploader.style';
import { useTranslation } from 'react-i18next';



const fileClien = new fileClient(solidAuth, { enableLogging: true });

const UploadJson = ({ setFile, file }) => {
	const filename = file == null ? '' : file.name;
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
						<h4 class="custom-file-label" id="nameRoute">{filename}</h4>
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
    const folder = "prueba2";

    const url = user.split("profile/card#me")[0] + folder;
    console.log(url);
    return (
        <div>
            <br></br>
			<FormCard>
				<UploadJson setFile={setFile} file={file} />
			</FormCard>
			<FormCard>
				<div><h2>Escoja los archivos multimedia que desee</h2></div>
				<MultimediaCard>
					<div class="form-group">
						<label  for="photo" class="labelPhoto">Images:</label>
						<input value={null} type="file" id="photo" name="image" accept=".png" multiple="true" onChange={(e) => setImage(e.target.files)} />
					</div>
				</MultimediaCard>
				<MultimediaCard>
					<div class="form-group">
						<label  for="video" class="labelVideo">Video:</label>
						<input value={null} type="file" id="video" name="video" accept=".mp4" multiple="true" onChange={(e) => setVideo(e.target.files)} />
					</div>
				</MultimediaCard>
			</FormCard>
            
            <br></br>
            <center>
                <button onClick={() => createFolder(url, file, image, video, setFile, setImage, setVideo)} class="btn btn-info" >Add route
                </button>
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



const createFolder = async (folder, file, photo, video, setFile, setImage, setVideo) => {
    var existe = await fileClien.itemExists(folder);
    if (!existe) {
        await fileClien.createFolder(folder);
    }


    var i = 0;

    await fileClien.createFile(folder + "/" + file.name, file, file.type);

    for (i = 0; photo != null && i < photo.length; i++) {
        fileClien.createFile(folder + "/" + photo[i].name, photo[i], "image/png");
    }

    for (i = 0; video != null && i < video.length; i++) {
        fileClien.createFile(folder + "/" + video[i].name, video[i], "video/mp4");
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