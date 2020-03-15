import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './leaflet.css';
import { Map as LeafletMap, GeoJSON, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import Rutas from '../../components/Ruta/rutas';
import { Button } from 'reactstrap';

import {
  Column,
  MapSection,
  Center,
  Up,
  Down,
  H2Format,
  H3Format,
  MapaStyle,
  LiStyle,
  UlStyle,
  PStyle
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



class CenterForm extends React.Component {
  constructor() {
    super();

    this.name = Rutas.getRutaByPosition(1).name;
    this.description = Rutas.getRutaByPosition(1).description;

  }

  changeName(newName) {
    this.name = newName;
  }
  render() {
    return (
      <Center>
          <H2Format>{this.name}</H2Format>
          <PStyle>{this.description}</PStyle>

        <MapComponet></MapComponet>
      </Center>
    );
  }
}

class LeftForm extends React.Component {

  changeRut() {
    alert("hola");
  }
  render() {
    return (

      <Column>
        <H2Format>Rutas</H2Format>
        <Up>
          <H3Format>Tus rutas</H3Format>
          <UlStyle>{Rutas.getNames().map((n) => <LiStyle onClick={this.changeRut}> {n} </LiStyle>)}</UlStyle>
        </Up>
        <Down><H3Format>Rutas de amigos</H3Format></Down> 
      </Column>
    );
  }
}


class MapComponet extends React.Component {

  constructor() {
    super();

    this.puntos = []
    Rutas.getRutaByPosition(1).points.map(p => this.puntos.push(p.getCoordinates()));

  }


  render() {
    const position = this.puntos[0];
    return (
      <MapaStyle center={position} zoom={16} >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Polyline color={'blue'} positions={this.puntos} />
        <Marker position={this.puntos[0]}>
          <Popup>Inicio</Popup>
        </Marker>
        <Marker position={this.puntos[this.puntos.length - 1]}>
          <Popup>Fin</Popup>
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