//import ruta1 from './rutas/ruta1.json';
//import ruta3 from './rutas/ruta3.json';
import prueba from './prueba.json';

import Ruta from './ruta.js';
import {getRoutesFileName , getRutas} from './servicePods';

class Rutas{

    constructor(newRoutes){
        this.rutas = [];
        this.prueba = new Ruta(prueba);
        newRoutes.forEach(r => {this.rutas.push(new Ruta(r))})
        //this.rutas.push(prueba);
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
        return this.rutas[p];
    }

    hayRutas(){
        return this.rutas.length !== 0;
    }
}


export default Rutas;

