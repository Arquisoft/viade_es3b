import ruta1 from './rutas/ruta1.json';
import ruta2 from './rutas/ruta2.json';
import Ruta from './ruta.js';

class Rutas{

    constructor(){
        this.rutas = [new Ruta(ruta1),new Ruta(ruta2)];
    }

    getNames(){
        let rutasName = [];
        this.rutas.map(r => rutasName.push(r.name));
        return rutasName;
    }

    getRutaByName(newName){
        var exit;
        this.getRutaByPosition( this.rutas.forEach((r)=> {if(r.name == newName){exit=r}}));
        return exit; 
        
    }

    getRutaByPosition(p){
        return this.rutas[p];
    }
}


export default Rutas = new Rutas();

