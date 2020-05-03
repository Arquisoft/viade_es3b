
import getJsonComments from './defaultJsonComments'
import checkJson from './checkJson'




export default function createFolder(fileClien, folder, json, name, photo, video, updateComment, showSuccessUploadFile, showErrorUploadFile, callback) {
	let fileJson = checkJson(json, name, showErrorUploadFile);
	if (fileJson !== null) {
		json = fileJson;
		let url;
		let i;
		let existe = fileClien.itemExists(folder);
		if (!existe) {
			fileClien.createFolder(folder);
		}

		if (updateComment) fileClien.createFile(folder + "/comments/routeComments/" + name.split('.json')[0] + "Comments.json", getJsonComments(), "application/json");

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

		if (fileClien.createFile(folder + "/routes/" + name, JSON.stringify(json), "application/json")) {
			showSuccessUploadFile("Ruta " + name);
		} else {
			showErrorUploadFile("Ruta " + name);
		}

	}
	callback();
}



