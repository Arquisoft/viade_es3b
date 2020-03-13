import React from "react";

import {AnchorButton, Intent} from "@blueprintjs/core";

class Uploader extends React.Component {
	
  constructor(props) {
    super(props);
  }

   async run() {
	   
	const FC = require('solid-file-client');
	const auth = require('solid-auth-cli')
	const fc = new FC( auth );
		
	const filesInput = document.getElementById('file-browser-input');
	const files = filesInput.files;
	
	const containerInput = document.getElementById('container');
	
	for (let i = 0; i < files.length; i++) {
        const file = files[i];
		
		//Unexpected error if we don't get the name on this const, idk why
		const name = file.name;
		
		try{
			//Place url in both places
			await fc.copyFolder(name, "//" );
		}
		catch (err) {
			console.error(err)
        }	
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