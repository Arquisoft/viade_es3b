
export class Point{
    constructor(latitude,longitude,altitude,photos,videos){
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
        this.photos = photos;
        this.videos = videos;
    }

    getCoordinates(){
        return [this.latitude,this.longitude];
    }

}