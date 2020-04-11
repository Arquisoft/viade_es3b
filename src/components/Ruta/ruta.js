import { Point , WayPoint,CommentObj} from "./point.js";
//import CommentObj from './comment.js'


export default class Ruta {
    constructor(file,commentsFile,fileName) {
        this.name = file.name;
        this.description = file.description;
        this.media = [];
        this.points = [];
        this.waypoints = []; 
        file.points.forEach(p =>this.points.push(new Point(p.latitude, p.longitude,p.elevation)));
        file.media.forEach(m => this.media.push(m["@id"]));
        file.waypoints.forEach(w => this.waypoints.push(new WayPoint(w.name,w.description,new Point(w.latitude, w.longitude,w.elevation))))
        this.currentMedia = 0;
        this.comments = [];
        commentsFile.comments.forEach( c => this.comments.push(new CommentObj(file.text,file.dateCreated)));
        //Datos para subir commentarios al pod
        
        this.fileName = fileName;
        
    }

    getNextMedia() {
        if (this.currentMedia < this.media.length - 1) {
            this.currentMedia = this.currentMedia + 1;
        }
        else {
            this.currentMedia = 0;
        }
        return this.media[this.currentMedia];
    }

    getPreviusMedia() {
        if (this.currentMedia === 0) {
            this.currentMedia = this.media.length - 1;
        } else {
            this.currentMedia = this.currentMedia - 1;
        }
        return this.media[this.currentMedia];
    }

    getCurrentMedia() {
        return this.media[this.currentMedia];
    }

    addComment(text ){
        //console.log("Usuario: " + user);
        let f = new Date();
        let date = f.getFullYear() + "-" + (f.getMonth() +1) + "-" + f.getDate();
        this.comments.push(new CommentObj(text,date));
        console.log(new CommentObj(text,date));
        console.log(this.comments[0].text);
        return  [this.makeJsonComment(),"comments/routeComments/" + this.fileName + "Comments.json"];
    }

    makeJsonComment(){
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
    
        this.comments.forEach(c => obj.comments.push({
            "text": c.text,
            "dateCreated": c.dateCreated
        }));
        console.log(JSON.stringify(obj));
        return JSON.stringify(obj);
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

