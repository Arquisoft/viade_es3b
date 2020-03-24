var rutas = [];

class ParserRutas{
  getRoutesFileName() {
    fetch('https://uo264354.solid.community/public/myRoutes/')
      .then(function (response) {
        return response.text();
      }).then (function (file){

        rutas.push(file);
      });
  
  };

  

  getRutas(){
    return rutas;
  }
  
  searchRoute(fileName) {
    const auth = require('solid-auth-client');
    auth.trackSession(session => {
      if (!session) {
        return;
      } else {
        let webId = session.webId;
        let urlRoute = webId.split("/profile/card#me")[0];
        urlRoute = urlRoute.concat("/public/myRoutes/").concat(fileName);
        fetch(urlRoute)
          .then(function (response) {
            return response.json();
          })
          .then(function (myFile) {
             return myFile;
          });
      }
    });
  }
};

export default ParserRutas = new ParserRutas();