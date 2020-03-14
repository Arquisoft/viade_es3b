import React from "react";

class Uploader extends React.Component {
	
  constructor(props) {
    super(props);
  }

   async run() {
	   
	const FC = require('solid-file-client');
	const auth = require('solid-auth-cli')
	const fc = new FC(auth, { enableLogging: true });
	
		
	const filesInput = document.getElementById('file-browser-input');
	const files = filesInput.files;
	
	const containerInput = document.getElementById('container');
	
	for (let i = 0; i < files.length; i++) {
        
		let file = files[i];
		
		try{
			var res = await fc.putFile("https://jorgeiturrioz.solid.community/viade" + file.name, file, file.type);
			console.log(res.status)
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