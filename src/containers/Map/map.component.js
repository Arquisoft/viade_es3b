import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './leaflet.css';
import { Map as LeafletMap, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import Rutas from '../../components/Ruta/rutas';
import ReactDOM from 'react-dom';

import {
  Column,
  MapSection,
  Up,
  Down,
  H2Format,
  H3Format,
  MapaStyle,
  LiStyle,
  UlStyle,
  PStyle,
  InformationSection,
  ImgSytle,
  ImgPopupSytle
} from './map.style';

/* Método para cambiar la imagen del Marker */
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

/* Variables */
var currentRuta;
var name;
var description;
var puntos = []




/* Método para cmabiar la ruta actualmento seleccionada */
function changeRuta(id, e) {
  currentRuta = Rutas.getRutaByName(id);
  document.getElementById("name").textContent = currentRuta.name;
  document.getElementById("description").textContent = currentRuta.description;
  changeMap(id);
  changePhotos();
}

function getMarkets() {
  return  <React.Fragment><Marker position={puntos[0]}>
    <Popup>Inicio</Popup>
  </Marker>
    <Marker position={puntos[puntos.length - 1]}>
      <Popup>Fin</Popup>
    </Marker>
    </React.Fragment>
  ;
}

function getMap() {
  currentRuta.points.map(p => puntos.push(p.getCoordinates()));

  return <MapaStyle id="map" center={puntos[0]} zoom={15} >
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Polyline color={'blue'} positions={puntos}></Polyline>
      {getMarkets()}
  </MapaStyle>;


}



function changeMap() {
  ReactDOM.render(getMap(), document.getElementById('map'));
}

function changePhotos() {
  let newImg = <ImgSytle id="img" src={currentRuta.getCurrentPhoto().img} />
  ReactDOM.render(newImg, document.getElementById('imgDiv'));
}

/* método que generar el mapa, junto con su nombre, y descripción*/
class Map extends React.Component {
  constructor() {
    super();
    currentRuta = Rutas.getRutaByPosition(1);
    name = currentRuta.name;
    description = currentRuta.description;
  }
  render() {
    return (
      <Up>
        <div id="map">
          {getMap()}
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

/* método que generar el mapa, junto con su nombre, y descripción*/
class Information extends React.Component {
  constructor() {
    super();
  }

  previusPhoto() {
    let newImg = <ImgSytle id="img" src={currentRuta.getPreviusPhoto().img} />
    ReactDOM.render(newImg, document.getElementById('imgDiv'));
  }

  nextPhoto() {
    let newImg = <ImgSytle id="img" src={currentRuta.getNextPhoto().img} />
    ReactDOM.render(newImg, document.getElementById('imgDiv'));
  }
  render() {
    return (
      <div>
        <button onClick={this.previusPhoto}></button>
        <div id="imgDiv">
          <ImgSytle id="img" src={currentRuta.getCurrentPhoto().img} />
        </div>
        <button onClick={this.nextPhoto}></button>
      </div>
    );
  }
}

class Mapa extends React.Component {
  render() {
    return (
      <div>
        <MapSection>
          <Map></Map>
        </MapSection>
        <InformationSection>
          <Information></Information>
        </InformationSection>

      </div>

    );
  }
}

export default Mapa;