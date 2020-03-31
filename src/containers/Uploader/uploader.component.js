import React from "react";
import { UploaderWrapper, UploaderCard, FileButton, ChooseButton, UploadButton, FileNames, FilesContainer } from './uploader.style';
import { useTranslation } from 'react-i18next';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Uploader = () => {
	const run = async () => {
		const FC = require('solid-file-client');
		const auth = require('solid-auth-client');
			
		const filesInput = document.getElementById('file-browser-input');
		const files = filesInput.files;
		
		//const containerInput = document.getElementById('container');
		
		for (let i = 0; i < files.length; i++) {
			
			let reader = new FileReader();
			let file = files[i];
			
			reader.readAsText(file);
			reader.onload = () => {
				
				let fileContent = reader.result;
				auth.trackSession(session => {
					if (session) {	
						const fc = new FC(auth);	
						let webId = session.webId;
						let url = webId.split("/profile/card#me")[0];
						url = url.concat("/public/myRoutes/").concat(file.name);
						
						if(fc.createFile(url, fileContent)){
							showSuccessUploadFile(file.name);
						}else{
							showErrorUploadFile(file.name);
						}
					}
				});
			};
		}
	};

	const showErrorUploadFile = (name) => {
		toast.error("Archivo " + name + " no se ha subido correctamente", {
			delay: 1000,
			autoClose: false,
			position: toast.POSITION.TOP_CENTER
		});
	}

	const showSuccessUploadFile = (name) => {
		//https://github.com/fkhadra/react-toastify
		toast.success("Archivo " + name + " subido correctamente", {
			delay: 1000,
			autoClose: false,
			position: toast.POSITION.TOP_CENTER
		});
	}

	const show = () => {
		const filesInput = document.getElementById('file-browser-input');
		const files = filesInput.files;
		if(files.length>0){
			//Muestro el boton upload y modify
			document.getElementById('upload').style.display ="initial";
			//Muestro el encabezado (Archivos seleccionados)
			document.getElementById('header-file-container').style.display ="initial";
			//Oculto el label de selccionar archivos
			document.getElementById('label-input').style.display ="none";
			//Borro lo seleccionado anteriormente
			document.getElementById('file-container').removeChild(document.getElementById('file-list'));
			//Muestro la lista de archivos y los botones de subir y modificar
			document.getElementById('files-container').style.display ="initial";
			//Creo la lista donde inserto los archivos seleccionados en el for
			var contenedor = document.createElement('ul');
			contenedor.id = 'file-list';
			//Inserto la lista al div con id=file-container
			document.getElementById('file-container').insertAdjacentElement('beforeend',contenedor);
			//Recorro los archivos seleccionados para insertarlos a la lista
			for (let i = 0; i < files.length; i++) {
				let file = files[i];
				var elemento = document.createElement('li');
				elemento.insertAdjacentText('beforeend', i+1 + "- " + file.name);
				//Añado a ul el elemento li
				contenedor.insertAdjacentElement('beforeend',elemento);		
			}
		}
	};
	
  	const { t } = useTranslation();
  	return (
    <UploaderWrapper>
			<UploaderCard className="card">
					<h2>{t('uploader.explanation')}</h2>
					<FileButton>
					<div className="inner-container"
						style= {{display: "flex", flexDirection: "column"}}>
						<ChooseButton>
							<div className="draggable-container">
								<input
									type="file"
									onChange = { show }
									id="file-browser-input"
									name="file-browser-input"
									multiple
								/>
								<label id="label-input" for="file-browser-input">
									<span>{t('uploader.choose')}</span>
								</label>
							</div>
						</ChooseButton>
						<FilesContainer id="files-container">
							<FileNames>
								<h3 id="header-file-container">{t('uploader.selectedFiles')}</h3>
								
								<div id="file-container">
									<ul id="file-list">
									</ul>
								</div>
							</FileNames>
							<UploadButton  id="upload">
								<button onClick = { run } >
								{t('uploader.upload')}
								</button>
								<label for="file-browser-input">
								{t('uploader.modifyFiles')}
									</label>
							</UploadButton>
							</FilesContainer>
						</div>
					</FileButton>
			</UploaderCard>
	  	</UploaderWrapper>
  );
};

export default Uploader;