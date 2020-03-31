import { NotificationManager } from "react-notifications";


function downloadRoute(name) {
    var file = await fc.readFile(urlGlobal);
    var blob = new Blob([file], { type: 'application/json' });
    console.log(file);
    var link = document.getElementById("downFile");
    link.href = URL.createObjectURL(blob);
    link.download = name + ".json";
    link.click();

}


function searchRoute() {
    const auth = require('solid-auth-client');
    auth.trackSession(session => {
        if (!session) {
            return;
        } else {
            fc = new FC(auth);
            var txt = document.getElementById("txtUrl").value;

            let webId = session.webId;
            let urlRoute = webId.slice(0, webId.length - 15).concat("public/MyRoutes/" + "ruta1" + ".json");
            setGlobal(urlRoute);
            downloadRoute(txt)
                .catch(err => NotificationManager.error(t('download.errorMessage'), t('download.errorTitle'), 5500));
        }
    });
}


