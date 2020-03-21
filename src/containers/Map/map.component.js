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

/* Variables */
var name;
var  description;
var puntos = []

/* Método para cambiar la imagen del Marker */
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


 /* Método para cmabiar la ruta actualmento seleccionada */
 function changeRuta(id, e) {
  let newRuta = Rutas.getRutaByName(id);
  document.getElementById("name").textContent = newRuta.name;
  document.getElementById("description").textContent = newRuta.description;

  puntos = newRuta.point;

  let a = <MapaStyle id="map" center={puntos[0]} zoom={15} >
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Polyline color={'blue'} positions={puntos}></Polyline>
    <Marker position={puntos[0]}>
      <Popup>Inicio</Popup>
    </Marker>
    <Marker position={puntos[puntos.length - 1]}>
      <Popup>Fin</Popup>
    </Marker>
  </MapaStyle>;
  ReactDOM.render(a, document.getElementById('map'));
}

class UpForm extends React.Component {
  constructor() {
    super();
    name = Rutas.getNames()[0];
    description = Rutas.getRutaByPosition(0).description;
    puntos = []
    Rutas.getRutaByPosition(0).points.map(p => puntos.push(p.getCoordinates()));

  }
  render() {
    return (
      <Up>
        <div id="map">
          <MapaStyle id="map" center={puntos[0]} zoom={15} >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Polyline color={'blue'} positions={puntos}></Polyline>
            <Marker position={puntos[0]}>
              <Popup>Inicio</Popup>
            </Marker>
            <Marker position={puntos[puntos.length - 1]}>
              <Popup>Fin</Popup>
            </Marker>
          </MapaStyle>
        </div>
        <Column>
          <H2Format id="name">{name}</H2Format>
          <PStyle id="description">{description}</PStyle>
          <H3Format>Tus rutas</H3Format>
          <UlStyle>{Rutas.getNames().map((n, i) => <LiStyle key={i} onClick={(e) => changeRuta(n, e)}> {n} </LiStyle>)}</UlStyle>
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