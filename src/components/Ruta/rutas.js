import Ruta from './ruta.js';

class Rutas{

    constructor(newRoutes){
        this.rutas = [];
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

