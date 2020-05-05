import { Point, WayPoint, CommentObj } from "./point.js";
//import CommentObj from './comment.js'


export default class Ruta {
    constructor(file, commentsFile, fileName, share, rutas) {
        this.rutas = rutas;
        this.name = file.name;
        this.urlComments = file.comments
        this.description = file.description;
        this.media = [];
        this.points = [];
        this.waypoints = [];
        this.comments = [];
        file.points.forEach(p => this.points.push(new Point(p.latitude, p.longitude, p.elevation)));
        if (commentsFile !== null) {
            file.media.forEach(m => this.media.push(m["@id"]));
            file.waypoints.forEach(w => this.waypoints.push(new WayPoint(w.name, w.description, new Point(w.latitude, w.longitude, w.elevation))))
            this.currentMedia = 0;
          
            commentsFile.comments.forEach(c => { if (c.text !== undefined) this.comments.push(new CommentObj(c.text, c.dateCreated)) });
            //Datos para subir commentarios al pod
            this.fileName = fileName;
            this.CommentsFileName = fileName.split('.')[0] + "Comments.json";
        }
        this.shared = share;
    }

    addComment(fileClien, text, callback) {
        fileClien.readFile(this.urlComments).then((file) => {
            var value = this.createComment(JSON.parse(file), text);
            fileClien.createFile(this.urlComments, value, "application/json").then(() => {
                callback();
            })
        }
        );
    }
    getWayPoints(){
        return this.waypoints;
    }

    addWayPoints(waypoint){
        this.waypoints.push(waypoint);
    }

    getNumberOfComments(){
        return this.comments.length;
    }

    getName(){
        return this.name;
    }


    createComment(file, text) {
        let f = new Date();
        let date = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate();
        file.comments.push({
            "text": text,
            "dateCreated": date
        });
        this.comments = [];
        file.comments.forEach(c => { if (c.text !== undefined) this.comments.push(new CommentObj(c.text, c.dateCreated)) });
        return JSON.stringify(file);
    }


    getBetweenTwoPoints(lat1, lon1, lat2, lon2) {
        let rad = function (x) { return x * Math.PI / 180; }
        var R = 6378.137; //Radio de la tierra en km
        var dLat = rad(lat2 - lat1);
        var dLong = rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d; //Retorna tres decimales
    }

    getDistance() {
        let distance = 0;
        let fistPoint = this.points[0].getCoordinates();
        let seconPoint;
        let i = 1;
        for (i; i < this.points.length; i++) {
            seconPoint = this.points[i].getCoordinates();
            distance = distance + this.getBetweenTwoPoints(fistPoint[1], fistPoint[0], seconPoint[1], seconPoint[0]);
            fistPoint = seconPoint;
        }
        return distance.toFixed(2);
    }

    share(fileClient, url, callback) {
        let user = url;
        console.log(this.fileName + "-" + this.shared);
        let folderToRemove = (this.shared) ? url + "public/viade/" : url + "viade/";
        let folderToCopy = (!this.shared) ? url + "public/viade/" : url + "viade/";
        let folderToCopyCommens = this.urlComments.includes("public/viade")? 
        this.urlComments.split("public/viade")[0] + "viade" + this.urlComments.split("public/viade")[1]:
        this.urlComments.split("viade")[0] +"public/viade" +url.split("viade")[1];

        fileClient.move(folderToRemove + "routes/" + this.fileName, folderToCopy + "routes/" + this.fileName).then(
        fileClient.readFile(folderToRemove + "routes/" + this.fileName).then((file) => {
            var value = this.updateMedia(JSON.parse(file), user);
            this.comments = folderToCopyCommens;
            fileClient.createFile( folderToCopy + "routes/" + this.fileName, value, "application/json").then(
                fileClient.move(this.urlComments, folderToCopyCommens).then(() => {
                        this.shared = !this.shared;
                        this.sharePhotos(fileClient, folderToCopy);
                        this.urlComments = folderToCopyCommens;
                        callback();
                    })
            )
        }));
    }

    sharePhotos(fileClient, folderToCopy) {
        this.media.forEach(m => {
            if (m.includes("viade")) {
                if (this.rutas.exitMedia(m) <= 1) {
                    fileClient.move(m, folderToCopy + m.split("viade/")[1])
                }
                else
                    fileClient.copy(m, folderToCopy + m.split("viade/")[1])
            }
        });
    }

    updateMedia(json, user) {
        json.media = [];
       this.media.forEach(m => {
            console.log("Media: " + m)
            if (!m.includes(user)) {
                json.media.push({
                    "@id": m
                });
            } else {
                console.log("Bien")
                if (m.includes("/public/")) {
                    m = m.split("public/")[0] + m.split("public/")[1];
                    json.media.push({
                        "@id": m
                    });
                } else {
                    m = m.split("viade/")[0] + "public/viade/" + m.split("viade/")[1];
                    json.media.push({
                        "@id": m
                    });
                }

            }
        });
        console.log(json);
        return JSON.stringify(json);


    }


}