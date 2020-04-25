

function getJsonComments() {
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

function read(file, callback) {
	var reader = new FileReader();

	reader.onload = function () {
		callback(JSON.parse(reader.result));
	}

	reader.readAsText(file);
}


export default function createFolder(fileClien,folder, file, photo, video, setFile, setImage, setVideo,publico,showSuccessUploadFile,showErrorUploadFile) {
	read(file, function (json) {
	
		let url;
		let i;
		let existe = fileClien.itemExists(folder);
		if (!existe) {
			fileClien.createFolder(folder);
		}

		fileClien.createFile(folder + "/comments/routeComments/" + file.name.split('.json')[0] + "Comments.json", getJsonComments(), file.type);

		for (i = 0; photo != null && i < photo.length; i++) {
			url = folder + "/resources/" + photo[i].name;
			json.media.push({ "@id": url })
			if (fileClien.createFile(url, photo[i], photo[i].type)) {
				showSuccessUploadFile("La foto " + photo[i].name + " ha sido subida correctamente");
			} else {
				showErrorUploadFile("La foto " + photo[i].name + " no se ha sido subida correctamente");
			}
		}

		for (i = 0; video != null && i < video.length; i++) {
			url = folder + "/resources/" + video[i].name;
			json.media.push({ "@id": url })
			if (fileClien.createFile(url, video[i], "video/mp4")) {
				showSuccessUploadFile("El vídeo " + video[i].name + " ha sido subido correctamente");
			} else {
				showErrorUploadFile("El vídeo" + video[i].name + " no se ha sido subido correctamente");
			}
		}

		if (fileClien.createFile(folder + "/routes/" + file.name, JSON.stringify(json), file.type)) {
			showSuccessUploadFile("Ruta " + file.name);
		} else {
			showErrorUploadFile("Ruta " + file.name);
		}
	
		setFile(null);
		setImage(null);
		setVideo(null);
		document.getElementById('photo').value = null;
		document.getElementById('video').value = null;
		document.getElementById('route').value = null;
		document.getElementById('cbox1').checked = false;
		publico = false;

    });
}