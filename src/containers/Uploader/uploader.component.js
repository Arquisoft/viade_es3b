import React from "react";
import { UploaderWrapper, UploaderCard, FileButton, ChooseButton, UploadButton, FileNames, FilesContainer } from './uploader.style';
import { useTranslation } from 'react-i18next';

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
					
					fc.createFile(url, fileContent);
					}
				});
			};
		}
	  };
	  const show = () => {
		
		const filesInput = document.getElementById('file-browser-input');
		const files = filesInput.files;

		//Muestro el boton upload 
		document.getElementById('upload').style.display ="initial";
		document.getElementById('header-file-container').style.display ="initial";
		document.getElementById('label-input').style.display ="none";
		document.getElementById('file-container').removeChild(document.getElementById('file-list'));
		document.getElementById('files-container').style.display ="initial";
		var contenedor = document.createElement('ul');
		contenedor.id = 'file-list';

		document.getElementById('file-container').insertAdjacentElement('beforeend',contenedor);
		for (let i = 0; i < files.length; i++) {
			let file = files[i];
			var elemento = document.createElement('li');
			elemento.insertAdjacentText('beforeend', i+1 + "- " + file.name);
			
			contenedor.insertAdjacentElement('beforeend',elemento);		
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