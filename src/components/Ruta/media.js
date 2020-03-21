export class Photo{
    constructor(author,url,date){
        this.author = author;
        this.date = date;
        this.img = '/img/' + url;
       
    }
}

export class Video{
    constructor(author,url,date){
        this.author = author;
        this.date = date;
        this.video = new Video().src= './rutas/' + url;
    }
}