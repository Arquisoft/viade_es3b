import React from "react";

class Uploader extends React.Component {
	
  constructor(props) {
    super(props);
  }

   async run() {
	   
	const FC = require('solid-file-client');
	const auth = require('solid-auth-cli');
		
	const filesInput = document.getElementById('file-browser-input');
	const files = filesInput.files;
	
	const containerInput = document.getElementById('container');
	
	for (let i = 0; i < files.length; i++) {
        
		let reader = new FileReader();
		let file = files[i];
		
		reader.readAsText(file);
		reader.onload = () => {
			
			let fileContent = reader.result;
			const auth = require("solid-auth-client");
			auth.trackSession(session => {
			if (session) {			
				const fc = new FC(auth , {enableLogging: true});
				let webId = session.webId;
				fc.createFile("https://jorgeiturrioz.solid.community/public/".concat(file.name), fileContent, "text/turtle", {});
				}
			});
		};
	}
  }

  render() {
	  
    return (
      <div
        className="inner-container"
        style={{
        display: "flex",
        flexDirection: "column"
      }}>
        <div className="draggable-container">
          <input
            type="file"
            id="file-browser-input"
            name="file-browser-input"
			multiple
		/>
        </div>
        <button
		  onClick = { () => this.run() }
		>Click me!
		</button>
      </div>
    );
  }
}

export default Uploader;