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
  ImgPopupSytle,
  H1FormatPopup
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
var puntos = [];
var distance;




/* Método para cmabiar la ruta actualmento seleccionada */
function changeRuta(id, e) {
  currentRuta = Rutas.getRutaByName(id);
  document.getElementById("name").textContent = currentRuta.name;
  document.getElementById("description").textContent = currentRuta.description;
  document.getElementById("distance").textContent = currentRuta.getDistance() + " KM";
  changeMap();
  changePhotos();
}

function getMarkets() {
  return <React.Fragment>
    <Marker position={puntos[0]}>
      {getFirtsPopup()}
    </Marker>
    {getCenterMarket()}
    <Marker position={puntos[puntos.length - 1]}>
      {getLastPopup()}
    </Marker>
  </React.Fragment>
    ;
}

function getFirtsPopup() {
  if (currentRuta.points[0].photos.length != 0)
    return <Popup><H1FormatPopup>Inicio</H1FormatPopup><ImgPopupSytle src={currentRuta.points[0].photos[0].img} /></Popup>;
  else
    return <Popup><H1FormatPopup>Inicio</H1FormatPopup></Popup>;
}

function getLastPopup() {
  if (currentRuta.points[currentRuta.points.length - 1].photos.length != 0)
    return <Popup><H1FormatPopup>Fin</H1FormatPopup><ImgPopupSytle src={currentRuta.points[currentRuta.points.length - 1].photos[currentRuta.points[currentRuta.points.length - 1].photos.length - 1].img} /></Popup>
  else
    return <Popup><H1FormatPopup>Fin</H1FormatPopup></Popup>
}

function getCenterMarket() {
  let centerMarket = [];
  let aux;

  puntos.map((p, i = 0) => {
    aux = getPopup(i);
    i = i + 1;
    if(aux != null) centerMarket.push(aux);
  })
  if(centerMarket.length != 0)
    return centerMarket[0];
}


function getPopup(i) {
  if (i != 0 && i != currentRuta.points.length - 1 && currentRuta.points[i].photos.length != 0)
    return <Marker position={puntos[i]}><Popup><ImgPopupSytle src={currentRuta.points[i].photos[0].img} /></Popup></Marker>

  return null;
}

function getMap() {
  puntos = [];
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
    currentRuta = Rutas.getRutaByPosition(0);
    name = currentRuta.name;
    description = currentRuta.description;
    distance = currentRuta.getDistance() + " KM";
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
          <PStyle id= "distance" >{distance}</PStyle>
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