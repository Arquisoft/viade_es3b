import React from "react";
import { UploaderWrapper, UploaderCard, FileButton, ChooseButton, UploadButton } from './uploader.style';

class Uploader extends React.Component {
	

   async run() {
	   
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
  }

  render() {
	  
    return (
		<UploaderWrapper>
			<UploaderCard className="card">
					<h2>Sube aquí los archivos multimedia de tus rutas</h2>
					<FileButton>
					<div className="inner-container"
						style= {{display: "flex", flexDirection: "column"}}>
						<ChooseButton>
							<div className="draggable-container">
								<input
									type="file"
									id="file-browser-input"
									name="file-browser-input"
									multiple
								/>
							</div>
						</ChooseButton>
						<UploadButton>
							<button onClick = { () => this.run() } >
								Subir
							</button>
						</UploadButton>
					</div>
					</FileButton>
			</UploaderCard>
	  	</UploaderWrapper>
      
    );
  }
}

export default Uploader;