import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import './leaflet.css';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

import {
  MapContainer,
  H2prueba,
  Right,
  MapSection,
  Left,
  Center,
  Up,
  Down,
  H2Format,
  H3Format,
  imgFormat,
  MapaStyle
} from './map.style';
import MapComponent from 'react-leaflet/lib/MapComponent';




class RightForm extends React.Component {
  render() {
    return (
      <Right>
        <H2Format>Tus rutas</H2Format>
        <Up><H3Format>Tus rutas</H3Format></Up>
        <Down><H3Format>Rutas de amigos</H3Format></Down>
      </Right>
    );
  }
}

class LeftForm extends React.Component {
  render() {
    return (
      <Left>
        <H2Format>Multimedia</H2Format>
        <Up>
          <H3Format>Fotos</H3Format>

        </Up>
        <Down><H3Format>Videos</H3Format></Down>
      </Left>
    );
  }
}

class CenterForm extends React.Component {
  render() {
    return (
      <Center>
        <Up> <H2Format>Nombre de la ruta</H2Format>
        <h3>Descripcion</h3>
        <p>Esto es un ejemplo de descripción dkfgñsdljgdkgjsdñf
          flgsñdfglkjsdflgñkjsflkñgjsdfñlkgjsfdñlgs
          kgsdgsdlkgjsfdkgljsfdlñkgjsdñ
          dkjghsdfkgsfdñlgjñsdlkjlkfdgjksdfl
          sdghsdflgsdfgjhsdfjkgl
          kdjsghsdfkjghsdkl
          </p></Up>
          <Down>
          <MapComponet></MapComponet>
          </Down>
       
        

      </Center>
    );
  }
}

class MapComponet extends React.Component {
  constructor(){
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
      <MapaStyle center = {position} zoom = {this.state.zoom} >
        <TileLayer url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
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