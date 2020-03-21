
export class Point{
    constructor(latitude,longitude,altitude,photo,video){
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
        this.photo = photo;
        this.video = video;
    }

    getCoordinates(){
        return [this.latitude,this.longitude];
    }
}