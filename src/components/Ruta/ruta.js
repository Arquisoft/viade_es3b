import { Point } from "./point.js";
import { Video, Photo } from "./media.js";

export default class Ruta {
    constructor(file) {
        this.name = file.name;
        this.description = file.description;
        console.log("Nombre: " + this.name + " descripcion: " + this.description);
        this.photos = [];
        this.videos = [];
        this.points = [];
        file.points.forEach(p =>this.points.push(new Point(p.latitude, p.longitude,p.elevation)));
        this.points.forEach(p => console.log(p.getCoordinates())); 
        file.media.forEach(m => this.saveMultimedia(m));
        this.currentPhoto = 0;
        this.currentVideo = 0;
    }

    saveMultimedia(m){
        let mUrl = m["@id"];
        if(mUrl.includes(".png") || mUrl.includes(".jpg"))
            this.photos.push(mUrl);
        else if(mUrl.includes(".mp4") )
            this.videos.push(mUrl);
    }

    getNextPhoto() {
        if (this.currentPhoto < this.photos.length - 1) {
            this.currentPhoto = this.currentPhoto + 1;
        }
        else {
            this.currentPhoto = 0;
        }
        return this.photos[this.currentPhoto];
    }

    getPreviusPhoto() {
        if (this.currentPhoto === 0) {
            this.currentPhoto = this.photos.length - 1;
        } else {
            this.currentPhoto = this.currentPhoto - 1;
        }
        return this.photos[this.currentPhoto];
    }

    getCurrentPhoto() {
        return this.photos[this.currentPhoto];
    }

    getNextVideo() {
        if (this.currentVideo < this.videos.length - 1) {
            this.currentVideo = this.currentVideo + 1;
        }
        else {
            this.currentVideo = 0;
        }
        return this.videos[this.currentVideo];
    }

    getPreviusVideo() {
        if (this.currentVideo === 0) {
            this.currentVideo = this.videos.length - 1;
        } else {
            this.currentVideo = this.currentVideo - 1;
        }
        return this.videos[this.currentVideo];
    }

    getCurrentVideo() {
        return this.videos[this.currentVideo];
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
        for( i ; i < this.points.length; i ++){
            seconPoint = this.points[i].getCoordinates();
            distance = distance + this.getBetweenTwoPoints(fistPoint[1],fistPoint[0],seconPoint[1],seconPoint[0]);
            fistPoint = seconPoint;
        }
        return distance.toFixed(2);
    }

   
}

