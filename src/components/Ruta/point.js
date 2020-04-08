
export class Point{
    constructor(latitude,longitude,altitude){
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
    }

    getCoordinates(){
        return [this.latitude,this.longitude];
    }

}