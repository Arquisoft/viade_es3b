import './AddRoute.css';


import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';

const fileClien = new fileClient(solidAuth, { enableLogging: true });


export function uploadMultimedia(folder, route, name, description, photo, video,setFile, setName, setDescription, setImage, setVideo)
    if (name===""||route==null){
        alert("Name or route is empty!");
    }
    else{
    var existe = await fileClien.itemExists(folder);
    if (!existe)
        await fileClien.createFolder(folder);
    var fileList = [];
    var nameValue = name;
    var destination = folder + "/" + nameValue + "/";
    existe = await fileClien.itemExists(destination);
    if (!existe) {
        var k=0;
        await fileClien.createFolder(destination);
        fileList.push(route);
        await fileClien.createFile(destination + "/"+ "description", description, "text/plain");
        for(k=0; photo != null && k<photo.length; k++){
            await fileClien.createFile(destination + "/"+ "photo" + "/img" + (k+1), photo[k], "img");
        }
        for(k=0; video != null && k<video.length; k++){
            await fileClien.createFile(destination + "/"+ "video"+ "/vid" + (k+1), video[k], "video");
        }

        for (var i = 0; i < fileList.length; i++) {
            var file = fileList[i];
            const fileURl = destination + "/" + nameValue + ".geojson";
            fileClien.putFile(fileURl, file, file.type);
        }
        alert("Your route has been added to the pod!!");
        //clean all fields
        setName('');
        setDescription('');
        setFile(null);
        setImage(null);
        setVideo(null);  
        
        document.getElementById('photo').value=null;
        document.getElementById('video').value=null;
        document.getElementById('route').value=null;
    }
    else
        alert("Route title already used, use another title");
}
