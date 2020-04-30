import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './leaflet.css';
import { Map as LeafletMap, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import ReactDOM from 'react-dom';
import Slider from './prueba'
import { ButtonsWrapper, RouteCard, CommentWrapper, RoutesCard, CommentContainer, MapContainerr, MapWrapper, MapCard, Left, Right, MapaStyle, Button, FormCard, ScrollDiv, MapSection, CommentCard, ButtonShare as ButtonShareStyle, MapContainer, ButtonsCard } from './map.style';
import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';
import NewRoute from './../NewRoute/index'


/* Método para cambiar la imagen del Marker */
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

/* método que generar el mapa, junto con su nombre, y descripción*/
const MapaComponent = props => {
  let fileClien = new fileClient(solidAuth, { enableLogging: true });
  let rutas = LeafletMap;
  rutas = props.rutas;
  let user = props.user;
  let currentRuta = (props.name !== undefined) ? rutas.getRutaByName(props.name) : rutas.currentRuta;
  let media = currentRuta.media;
  let puntos = [];

  /* Método para cambiar la ruta actualmento seleccionada */
  function changeRuta(id) {
    currentRuta = rutas.getRutaByName(id);
    document.getElementById("name").textContent = currentRuta.name;
    document.getElementById("description").textContent = currentRuta.description;
    document.getElementById("distance").textContent = "Distancia: " + currentRuta.getDistance() + " KM";
    updateShareButton();
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


  function shareRoute() {
    document.getElementById("btShare").disabled = true;
    currentRuta.share(fileClien, user.split("profile/card#me")[0], updateShareButton);
  }

  function updateShareButton() {
    document.getElementById("btShare").textContent = (currentRuta.shared) ? "Descompartir" : "Compartir";
    document.getElementById("btShare").disabled = false;
  }

  function addComment() {
    let text = document.getElementById("comentario").value;
    document.getElementById("comentario").value = "Publicando";
    document.getElementById("comentario").readonly = true;
    currentRuta.addComment(fileClien, text, user, updateComments);

  }

  function updateComments() {
    ReactDOM.hydrate(<Comments></Comments>, document.getElementById('comments'));
    document.getElementById("comentario").value = "";
  }

  const Comments = () => {
    function obtainComments() {
      let aux = [];
      currentRuta.comments.forEach(c => {
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

  const ButtonShare = () => {
    if (currentRuta.shared === undefined)
      return <></>
    else {
      return <> <br></br><ButtonShareStyle id="btShare" onClick={() => shareRoute()} > {(currentRuta.shared) ? "Descompartir" : "Compartir"}</ButtonShareStyle></>
    }

  }
  return (
    <MapWrapper>
      <MapContainerr>
        <RoutesCard className="routes">
          <ScrollDiv>
            <center>
              <h1>Rutas</h1>
            </center>
            <center>
              {rutas.getNames().map((n, i) => <Button key={i} onClick={() => changeRuta(n)}> {n} </Button>)}
            </center>
          </ScrollDiv>
        </RoutesCard>
        <Map></Map>


        <RouteCard className="routes">
          <ScrollDiv>
            <center><h1 id="name">{currentRuta.name}</h1></center>
            <center><h3 id="description">{ currentRuta.description}</h3></center>
            <center><h3 id="distance" >{ currentRuta.getDistance() + " KM"}</h3></center>
            <ButtonsWrapper>
            <Slider {... { media }}></Slider>
            <ButtonShare> </ButtonShare>
            <button onClick={() => ReactDOM.render(<NewRoute {...{ currentRuta }}></NewRoute>, document.getElementById('mapComponent'))}>Editar</button>
            </ButtonsWrapper>
          </ScrollDiv>
        </RouteCard>

      </MapContainerr>
      <CommentContainer>
        <CommentWrapper className="comments">
          <CommentCard >
            <div id="comments"><Comments></Comments></div>
          </CommentCard>
        </CommentWrapper>
      </CommentContainer>
    </MapWrapper>
  );
}
export default MapaComponent;