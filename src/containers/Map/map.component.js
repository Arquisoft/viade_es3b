import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './leaflet.css';
import { Map as LeafletMap, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
//import Rutas from '../../components/Ruta/rutas';
import ReactDOM from 'react-dom';
import { Player } from 'video-react';


import {
  Column,
  MapSection,
  Up,
  H2Format,
  H3Format,
  MapaStyle,
  LiStyle,
  UlStyle,
  PStyle,
  InformationSection,
  ImgSytle,
  PlayerStyle,
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
var distance = LeafletMap;
var rutas;




/* Método para cmabiar la ruta actualmento seleccionada */
function changeRuta(id, e) {
  currentRuta = rutas.getRutaByName(id);
  document.getElementById("name").textContent = currentRuta.name;
  document.getElementById("description").textContent = currentRuta.description;
  document.getElementById("distance").textContent = currentRuta.getDistance() + " KM";
  changeMap();
}



function getPopup(i) {
  let w = currentRuta.waypoints;
  if(w.length > i){
    return <Marker position={w[i].point.getCoordinates()}><Popup><p>{w[i].name}</p><p>{w[i].description}</p></Popup></Marker>;
  }
}

function getMap() {
  puntos = [];
  let waypoints = currentRuta.waypoints;
  currentRuta.points.forEach(p => puntos.push(p.getCoordinates()));
  return <MapaStyle id="MapStyle" center={puntos[0]} zoom={15} >
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Polyline color={'blue'} positions={puntos}></Polyline>
    {getPopup(0)}{getPopup(1)}{getPopup(2)}{getPopup(3)}{getPopup(4)}{getPopup(5)}
    {getPopup(6)}{getPopup(7)}{getPopup(8)}{getPopup(9)}{getPopup(10)}
  </MapaStyle>;
}


function changeMap() {
  ReactDOM.hydrate(<MapView></MapView>, document.getElementById('mapComponent'));
}

/* método que generar el mapa, junto con su nombre, y descripción*/
class Map extends React.Component {
  constructor() {
    super();
    currentRuta = rutas.getRutaByPosition(0);
    name = currentRuta.name;
    description = currentRuta.description;
    distance = currentRuta.getDistance() + " KM";
  }
  render() {
    return (
      <Up>
        <div id="map">
          {getMap()}
          
          {getPopup()}
        </div>
        <Column>
          <H2Format id="name">{name}</H2Format>
          <PStyle id="description">{description}</PStyle>
          <PStyle id="distance" >{distance}</PStyle>
          <H3Format>Tus rutas:</H3Format>
          <UlStyle>{rutas.getNames().map((n, i) => <LiStyle key={i} onClick={(e) => changeRuta(n, e)}> {n} </LiStyle>)}</UlStyle>
        </Column>
      </Up>
    );
  }
}

const getMediaComponent = (url) => {
  console.log(url);
  if (url.includes('.mp4')) {
    return (<Player
      playsInline
      poster="/assets/poster.png"
      src={url}
      fluid={false}
      width={640}
      height={360}
    />)
  } else {
    return <ImgSytle id="img" src={url} />
  }
}


/* método que generar el mapa, junto con su nombre, y descripción*/
const Information = () => {
  function previusPhoto() {
    ReactDOM.hydrate(getMediaComponent(currentRuta.getPreviusMedia()), document.getElementById('imgDiv'));
  }

  function nextPhoto() {
    ReactDOM.hydrate(getMediaComponent(currentRuta.getNextMedia()), document.getElementById('imgDiv'));
  }

  return (
    <div>
      <button onClick={previusPhoto}></button>
      <div id="imgDiv">
        {getMediaComponent(currentRuta.getCurrentMedia())}
      </div>
      <button onClick={nextPhoto}></button>
    </div>);
}

const MapView = () => {
  return <div><MapSection>
    <Map></Map>
  </MapSection>
    <InformationSection>
      <Information></Information>
    </InformationSection></div>;
}

function updateMap() {

  ReactDOM.hydrate(<MapView></MapView>, document.getElementById('mapComponent'));

}

function messageNoRutas() {
  let messageNoRutas = <InformationSection>
    <H2Format>NO HAY RUTAS EN EL POD</H2Format>
  </InformationSection>;

  ReactDOM.hydrate(messageNoRutas, document.getElementById('mapComponent'));
}

function loadMap() {
  if (rutas.hayRutas())
    updateMap();
  else
    messageNoRutas();

};

function MapaComponent(props) {
  rutas = props.rutas;
  return (
    <div>{loadMap()}</div>
  )
}

export default MapaComponent;