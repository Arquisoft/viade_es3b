import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './leaflet.css';
import { Map as LeafletMap, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import ReactDOM from 'react-dom';
import Slider from './prueba'
import { Column, Up, MapaStyle, MapCard, Button, FormCard, ScrollDiv, MapSection ,CommentCard} from './map.style';
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
    ReactDOM.hydrate(<MapaComponent  {... { rutas, user }}></MapaComponent>, document.getElementById('mapComponent'));
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

  function addComment() {
    let text = document.getElementById("comentario").value;
    document.getElementById("comentario").value = "Publicando";
    document.getElementById("comentario").readonly = true;
    var fileClien = new fileClient(solidAuth, { enableLogging: true });
    let url = user.split("profile/card#me")[0] + currentRuta.CommentsFileName;
    console.log(url);
    fileClien.readFile(url).then((fileComment) =>{
    
    var value = currentRuta.addComment(JSON.parse(fileComment),text);
    fileClien.createFile(url, value, "application/json").then(() => {
      ReactDOM.hydrate(<Comments></Comments>, document.getElementById('comments'));
      document.getElementById("comentario").value = "";})
    }
    );
  }

  const Comments = () => {
    function obtainComments() {
      let aux = [];
      currentRuta.comments.forEach(c =>{
          aux.push(<p key={c.text}><h1>{c.dateCreated}</h1>{c.text}</p>);
        });
      return aux;
    }

    return <CommentCard>
      <h1 id="name">Comentarios</h1>
      {obtainComments()}
      <div></div><input type="text" id="comentario"></input>
      <button onClick={addComment}>Comentar</button></CommentCard>;
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
    <div>
      <MapSection>
        <Up id="up">
          <div id="map" >
            <Map></Map>
          </div>
          <Column>
            <MapCard>
              <FormCard>
                <h1 id="name">{currentRuta.name}</h1>
                <h3 id="description">{currentRuta.description}</h3>
                <h3 id="distance" >{"Distancia: " + currentRuta.getDistance() + " KM"}</h3>

                <Slider {... { media }}></Slider>
              </FormCard>
              <ScrollDiv>
                <FormCard  ><h2>Rutas:</h2>
                  {rutas.getNames().map((n, i) => <Button key={i} onClick={() => changeRuta(n)}> {n} </Button>)}
                </FormCard>
              </ScrollDiv>
            </MapCard>
          </Column>
        </Up>
      </MapSection>
        <div id="comments"><Comments></Comments></div>
      
    </div>
  );
}
export default MapaComponent;