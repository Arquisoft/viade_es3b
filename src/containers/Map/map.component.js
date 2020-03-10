import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './leaflet.css';
import { Map as LeafletMap, GeoJSON, TileLayer, Marker, Popup } from 'react-leaflet';


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

class MapComponet extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 43.354444,
      lng: -5.85166,
      zoom: 12
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <MapaStyle center={position} zoom={this.state.zoom} >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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