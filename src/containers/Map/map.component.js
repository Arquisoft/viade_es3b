import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './leaflet.css';
import { Map as LeafletMap, GeoJSON, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import Rutas from '../../components/Ruta/rutas';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';

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






class DownForm extends React.Component {
  constructor() {
    super();

    this.name = Rutas.getRutaByPosition(1).name;
    this.description = Rutas.getRutaByPosition(1).description;

  }


  render() {
    return (


      <PStyle>{this.description}</PStyle>
    );
  }
}

class Line extends React.Component {
  render() {
    const position = this.puntos[0];
    return (
      <div>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Polyline color={'blue'} positions={this.puntos}></Polyline>
        <Marker position={this.puntos[0]}>
          <Popup>Inicio</Popup>
        </Marker>
        <Marker position={this.puntos[this.puntos.length - 1]}>
          <Popup>Fin</Popup>
        </Marker>
      </div>
    );
  }
}


class UpForm extends React.Component {

  constructor() {
    super();
    this.name = Rutas.getNames()[0];
    this.description = Rutas.getRutaByPosition(0).description;
    this.puntos = []
    Rutas.getRutaByPosition(1).points.map(p => this.puntos.push(p.getCoordinates()));

  }
  changeName(id, e) {
    var newRuta = Rutas.getRutaByName(id);
    document.getElementById("name").textContent = newRuta.name;
    document.getElementById("description").textContent = newRuta.description;
 
    this.puntos = newRuta.point;
    const position = this.puntos[0];
    console.log(this.puntos);

   var a = <MapaStyle id="map" center={position} zoom={15} >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline color={'blue'} positions={this.puntos}></Polyline>
      <Marker position={this.puntos[0]}>
        <Popup>Inicio</Popup>
      </Marker>
      <Marker position={this.puntos[this.puntos.length - 1]}>
        <Popup>Fin</Popup>
      </Marker>
    </MapaStyle>;

    ReactDOM.render(a, document.getElementById('map'));
  }

  render() {
    const position = this.puntos[0];
    return (
      <Up>
        <div id = "map">
        <MapaStyle  center={position} zoom={15} >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Polyline color={'blue'} positions={this.puntos}></Polyline>
          <Marker position={this.puntos[0]}>
            <Popup>Inicio</Popup>
          </Marker>
          <Marker position={this.puntos[this.puntos.length - 1]}>
            <Popup>Fin</Popup>
          </Marker>
        </MapaStyle>
        </div>
        <Column>
          <H2Format id="name">{this.name}</H2Format>
          <PStyle id="description">{this.description}</PStyle>
          <H3Format>Tus rutas</H3Format>
          <UlStyle>{Rutas.getNames().map((n, i) => <LiStyle key={i} onClick={(e) => this.changeName(n, e)}> {n} </LiStyle>)}</UlStyle>
        </Column>
      </Up>
    );
  }
}



class Mapa extends React.Component {
  render() {
    return (
      <MapSection>
        <UpForm></UpForm>
        <Down></Down>
      </MapSection>

    );
  }
}

export default Mapa;