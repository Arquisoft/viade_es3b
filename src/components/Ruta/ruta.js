import {Point} from "./point.js";

export default class Ruta{
    constructor(file){
        this.points = [];
        file.itinerary.itemListElement.map(p => this.points.push(new Point(p.latitude,p.longitude,0)));
        this.point = [];
        this.points.map(p => this.point.push([p.latitude,p.longitude]));
        this.name = file.name;
        this.description = file.description;
    }
}

