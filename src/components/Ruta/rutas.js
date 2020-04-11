import Ruta from './ruta.js';

class Rutas{
    constructor(newRoutes,commentsJson,fileName){
        this.rutas = [];
        for( var i= 0; i < newRoutes.length;  i ++){
            this.rutas.push(new Ruta(newRoutes[i],commentsJson[i],fileName[i]))
        }
        this.currentRuta = this.rutas[0];
    }

    getNames(){
        let rutasName = [];
        this.rutas.map(r => rutasName.push(r.name));
        return rutasName;
   
    }

    getRutaByName(newName){
        var exit;
        this.getRutaByPosition( this.rutas.forEach((r)=> {if(r.name === newName){exit=r}}));
        this.currentRuta = exit;
        return exit; 
    }

    getRutaByPosition(p){
        this.currentRuta = this.rutas[p];
        return this.rutas[p];
    }

    hayRutas(){
        return this.rutas.length !== 0;
    }
}


export default Rutas;

