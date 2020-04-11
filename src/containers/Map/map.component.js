import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './leaflet.css';
import { Map as LeafletMap, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import ReactDOM from 'react-dom';
import Slider from './prueba'
import { Column, Up, MapaStyle, UploaderCard, Button, FormCard,ScrollDiv } from './map.style';
import { useWebId } from '@solid/react';
import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';


/* Método para cambiar la imagen del Marker */
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

/* método que generar el mapa, junto con su nombre, y descripción*/
const MapaComponent = props => {
  let rutas = LeafletMap;
  rutas = props.rutas;
  let user = props.user;
  let currentRuta = rutas.currentRuta;
  let media = currentRuta.media;
  let puntos = [];

  /* Método para cambiar la ruta actualmento seleccionada */
  function changeRuta(id) {
    currentRuta = rutas.getRutaByName(id);
    document.getElementById("name").textContent = currentRuta.name;
    document.getElementById("description").textContent = currentRuta.description;
    document.getElementById("distance").textContent = "Distancia: " + currentRuta.getDistance() + " KM";
    media = currentRuta.media;
    ReactDOM.hydrate(<MapaComponent  {... { rutas }}></MapaComponent>, document.getElementById('mapComponent'));
  }

  /* Método que devuelve los marcadores con los sistios de interes */
  function getMark() {
    let markets = []
    let w = currentRuta.waypoints;
    for (var i = 0; i < w.length; i++) {
      markets.push(<Marker position={w[i].point.getCoordinates()}><Popup><p>{w[i].name}</p><p>{w[i].description}</p></Popup></Marker>)
    }
    return markets;
  }

  function addComment(){
    var value = currentRuta.addComment("hola")
    var fileClien = new fileClient(solidAuth, { enableLogging: true });
    let url = user.split("profile/card#me")[0] + value[1];
    fileClien.createFile(url, value[0], value[0].type);
    
  }

  const Map = () => {
    puntos = [];
    currentRuta.points.forEach(p => puntos.push(p.getCoordinates()));
    return <MapaStyle id="MapStyle" center={puntos[0]} zoom={15} >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline color={'blue'} positions={puntos}></Polyline>
      {getMark()}
    </MapaStyle>;
  }
  return (
    <Up>
      <div id="map" >
        <Map></Map>
      </div>
      <Column>
        <UploaderCard>
          <FormCard>
            <h1 id="name">{currentRuta.name}</h1>
            <h3 id="description">{currentRuta.description}</h3>
            <h3 id="distance" >{"Distancia: " + currentRuta.getDistance() + " KM"}</h3>
            <button onClick={addComment}>Comentario</button>
            <Slider {... { media }}></Slider>
          </FormCard>
          <ScrollDiv>
          <FormCard  ><h2>Tus rutas:</h2>
            {rutas.getNames().map((n, i) => <Button key={i} onClick={() => changeRuta(n)}> {n} </Button>)}
            </FormCard>
            </ScrollDiv>
        </UploaderCard>
      </Column>
    </Up>
  );
}
export default MapaComponent;