import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './leaflet.css';
import { Map as LeafletMap, GeoJSON, TileLayer, Marker,Polyline, Popup } from 'react-leaflet';
import ruta1 from './rutas/ruta1.json';


import {
  Column,
  MapSection,
  Center,
  Up,
  Down,
  H2Format,
  H3Format,
  MapaStyle
} from './map.style';


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class RightForm extends React.Component {
  render() {
    return (
      <Column>
        <H2Format>Multimedia</H2Format>
        <Up>
          <H3Format>Fotos</H3Format>

        </Up>
        <Down><H3Format>Videos</H3Format></Down>
      </Column>
    );
  }
}

class LeftForm extends React.Component {
  render() {
    return (
      <Column>
        <H2Format>Rutas</H2Format>
        <Up><H3Format>Tus rutas</H3Format></Up>
        <Down><H3Format>Rutas de amigos</H3Format></Down>
      </Column>
    );
  }
}

class CenterForm extends React.Component {
  constructor(){
    super();

    this.name = ruta1.name;
    this.description = ruta1.description;
    
  }
   
  render() {
    return (
      <Center>
        
        <Up> 
           <H2Format>{this.name}</H2Format>
          <p>{this.description}
          </p></Up>

        <MapComponet></MapComponet>




      </Center>
    );
  }
}

class MapComponet extends React.Component {

  constructor(){
   super();

   this.puntos = [];
   var i;
   
   for(i = 0; i < ruta1.itinerary.numberOfItems; i++){
      var aux = [];
      aux[0] = ruta1.itinerary.itemListElement[i].latitude;
      aux[1] = ruta1.itinerary.itemListElement[i].longitude;
      this.puntos[i] = aux;
   }

   
    
  }

  render() {
    const position = this.puntos[0];
    return (
      <MapaStyle center={position} zoom={16} >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Polyline color={'blue'} positions={this.puntos}/>
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </MapaStyle>
    );
  }
}



class Mapa extends React.Component {
  render() {
    return (
      <MapSection>
        <LeftForm></LeftForm>


        <CenterForm></CenterForm>

        <RightForm></RightForm>
      </MapSection>

    );
  }
}

export default Mapa;