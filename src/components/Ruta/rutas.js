import ruta1 from './rutas/ruta1.json';
import ruta3 from './rutas/ruta3.json';
import ruta4 from './rutas/ruta4.json';
import Ruta from './ruta.js';
import {getRoutesFileName , getRutas} from './servicePods';

class Rutas{

    constructor(){
        this.rutas = [new Ruta(ruta1),new Ruta(ruta3),new Ruta(ruta4)];
        getRoutesFileName();
        setTimeout(() => {   getRutas().forEach(r => {console.log(r) ;
        new Ruta(r)})}, 3000);
    }

    getNames(){
        let rutasName = [];
        this.rutas.map(r => rutasName.push(r.name));
        

        
        return rutasName;
   
    }

    getRutaByName(newName){
        var exit;
        this.getRutaByPosition( this.rutas.forEach((r)=> {if(r.name === newName){exit=r}}));
        return exit; 
    }

    getRutaByPosition(p){
        if(p.lenght === 0)
            alert("No hay ninguna rutas");
        return this.rutas[p];
    }
}


export default Rutas = new Rutas();

