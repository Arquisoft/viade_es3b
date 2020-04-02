var rutas = [];

export function getRoutesFileName() {

  const auth = require('solid-auth-client');
    auth.trackSession(session => {
    let webId = session.webId;
    let urlRoute = webId.split("/profile/card#me")[0];
    urlRoute = urlRoute.concat("/public/myRoutes/");

    fetch(urlRoute)
      .then(function (response) {
        return response.text();
      }).then(function (file) {
        let i = 0;
        let a = false;
        let cadena = '';

        for (i; i < file.length; i++) {
          let element = file[i];

          if (element === '<') {
            a = true;
          } else if (element === '>') {
            a = false;
            if (cadena.includes('.json')) {
              searchRoute(cadena);
            } else if (cadena.includes('.jpg')) {
              searchPhoto(cadena);
            }

            if (file[i + 1] === ';') break;
            cadena = '';
          } else if (a) {
            cadena = cadena + element
          }
        }
      })
  });
}

export function getRutas() {
  return rutas;
}

function searchRoute(fileName) {
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
          rutas.push(myFile);
        });
    }
  });
}


function searchPhoto(fileName) {
  var outside
  const auth = require('solid-auth-client');
  auth.trackSession(session => {
    if (!session) {
      return;
    } else {
      let webId = session.webId;
      let urlRoute = webId.split("/profile/card#me")[0];
      urlRoute = urlRoute.concat("/public/myRoutes/").concat(fileName);
      console.log(urlRoute);
      fetch(URL)
        .then(response => response.blob())
        .then(images => {
          outside = URL.createObjectURL(images)
          console.log(outside)
        })
    }
  });


}

