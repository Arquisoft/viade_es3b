

export default function checkJson(json, fileName, showErrorUploadFile) {
    var good = true;
    if (json.name === undefined) {
        message(fileName,"'name'",showErrorUploadFile);
        good = false;
    }

    if (json.description === undefined) {
        good = false;
        message(fileName,"'description'",showErrorUploadFile);
    }

    if (json.points === undefined) {
        good = false;
        message(fileName,"'points'",showErrorUploadFile);

    } else {
        let element = json.points[0];
        if (element.latitude === undefined) {
            good = false;
            message(fileName,"'point.latitude'",showErrorUploadFile);
        }
        if (element.longitude === undefined) {
            good = false;
            message(fileName,"'point.longitude'",showErrorUploadFile);
        }
        if (element.elevation === undefined) {
            good = false;
            message(fileName,"'point.latitude'",showErrorUploadFile);
        }


    }

    if (json.author === undefined) json.author = "anonimo";
    if (json.comments === undefined) json.comments = null;
    if (json.media === undefined) json.media = [];
    if (json.waypoints === undefined) json.waypoints = [];

    return good ? json : null;
}

function message(file,propiedad,showErrorUploadFile){
     // eslint-disable-next-line
    if(showErrorUploadFile !== undefined) showErrorUploadFile("(" + file + ") " + "The json file does not contain the property " + propiedad);
}