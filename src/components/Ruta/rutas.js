import ruta1 from './rutas/ruta1.json';
import ruta3 from './rutas/ruta3.json';
import ruta4 from './rutas/ruta4.json';
import Ruta from './ruta.js';

class Rutas{

    constructor(){
        this.rutas = [new Ruta(ruta1),new Ruta(ruta3),new Ruta(ruta4)];
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
}


export default Rutas = new Rutas();

