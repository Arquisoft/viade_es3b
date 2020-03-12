import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './leaflet.css';
import { Map as LeafletMap, GeoJSON, TileLayer, Marker,Polyline, Popup } from 'react-leaflet';


import {
  Column,
  MapSection,
  Center,
  Up,
  Down,
  H2Format,
  H3Format,
  MapaStyle,
  MarkerStyle
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
  render() {
    return (
      <Center>
        <Up> <H2Format>Nombre de la ruta</H2Format>
          <h3>Descripcion</h3>
          <p>Esto es un ejemplo de descripción dkfgñsdl jgdkgjsdñf
            flgsñ dfglk jsdf lgñkj sfl kñgjsdf ñlkgjs fdñlgs
            kgs dgs dlkg jsfd kglj sfdl ñkg jsdñ
            dkjgh sdf kgsfdñl gjñsdlkj lkfd gjk sdfl
            sdghs dflgsdfg jhsdfjkgl
            kdjsgh sdfkjg hsdkl
          </p></Up>

        <MapComponet></MapComponet>




      </Center>
    );
  }
}

var positions = [
  [11.029479,-74.8076453],
  [11.028873,-74.8070823],
  [11.028341,-74.8066743],
  [11.027604,-74.8060093],
  [11.027028,-74.8050647],
  [11.0245273,-74.8043527],
  [11.0235483,-74.8034517],
  [11.0208286,-74.8000513],
  [11.0199153,-74.7987372],
  [11.0194403,-74.7983782],
  [11.0187983,-74.7978982],
  [11.0179853,-74.7972762],
  [11.0173003,-74.7968572],
  [11.0165893,-74.7961802],
  [11.0155063,-74.7955112],
  [11.0147045,-74.7948133],
  [11.0137273,-74.7941322]
];
class MapComponet extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 11.0137273,
      lng: -74.7941322,
      zoom: 12
    }

   
  }
 



  render() {
    const position = positions[0];
    return (
      <MapaStyle center={position} zoom={this.state.zoom} >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Polyline color={'blue'} positions={positions}/>
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