
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

export class WayPoint{
    constructor(name, description , point){
        this.name = name;
        this.description = description;
        this.point = point;
    }
}

export class CommentObj{
    constructor(text,dateCreated){
        this.text = text;
        this.dateCreated = dateCreated;
    }

}