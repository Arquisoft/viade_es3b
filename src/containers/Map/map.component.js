import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './leaflet.css';
import { Map as LeafletMap, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import ReactDOM from 'react-dom';
import Slider from './multimedia'
import { ButtonsWrapper, RouteCard, CommentWrapper, RoutesCard, CommentContainer, MapContainerr, MapWrapper, MapaStyle, Button, ScrollDiv,  CommentCard, ButtonShare as ButtonShareStyle } from './map.style';
import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';
import NewRoute from './../NewRoute/index';
import { useTranslation } from 'react-i18next';


/* Método para cambiar la imagen del Marker */
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

/* método que generar el mapa, junto con su nombre, y descripción*/
const MapaComponent = props => {
  const { t } = useTranslation();
  let fileClien = new fileClient(solidAuth, { enableLogging: true });
  let rutas = LeafletMap;
  rutas = props.rutas;
  let user = props.user;
  let currentRuta = (props.name !== undefined) ? rutas.getRutaByName(props.name) : rutas.currentRuta;
  let media = currentRuta.media;
  let puntos = [];

  /* Método para cambiar la ruta actualmento seleccionada */
  function changeRuta(id,t) {
    currentRuta = rutas.getRutaByName(id);
    document.getElementById("name").textContent = currentRuta.name;
    document.getElementById("description").textContent = currentRuta.description;
    document.getElementById("distance").textContent = t('route.distance') + currentRuta.getDistance() + " KM";
    updateShareButton(t);
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
    ReactDOM.hydrate(<ButtonShare></ButtonShare>, document.getElementById('divSahred'));
    document.getElementById("btShare").disabled = false;
  }

  function addComment(t) {
    let text = document.getElementById("comentario").value;
    document.getElementById("comentario").value = '...';
    document.getElementById("comentario").readonly = true;
    currentRuta.addComment(fileClien,text, updateComments);

  }

  function updateComments() {
    ReactDOM.unmountComponentAtNode(document.getElementById('mapComponent'));
    ReactDOM.hydrate(<MapaComponent  {... { rutas, user }}></MapaComponent>, document.getElementById('mapComponent'));
    document.getElementById("comentario").value = "";
  }

  const Comments = () => {
    const { t } = useTranslation();
    function obtainComments() {
      let aux = [];
      currentRuta.comments.forEach(c => {
        aux.push(<p key={c.text}><h1>{c.dateCreated}</h1>{c.text}</p>);
      });
      return aux;
    }

    function obtainButton(){
      return (currentRuta.shared !== undefined)?
        <div> <div></div><input type="text" id="comentario"></input>
        <button onClick={addComment}>{t('route.comment')}</button></div> : <></>;
    }

    return <CommentCard>
      <h1 id="name">{t('route.comments')}</h1>
      {obtainComments()}
      {obtainButton()}
      </CommentCard>
      ;
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

  const RuteInformation = (props) => {
    let currentRuta = props.currentRuta;
    return <div><center><h1 id="name">{currentRuta.name}</h1></center>
    <center><h3 id="description">{ currentRuta.description}</h3></center>
    <center><h3 id="distance" >{ t('route.distance') + currentRuta.getDistance() + " KM"}</h3></center></div>
  }
  const ButtonShare = () => {
    const { t } = useTranslation();
    if (currentRuta.shared === undefined)
      return <></>
    else {
      return <> <br></br><ButtonShareStyle id="btShare" onClick={() => shareRoute()} > {(currentRuta.shared) ? t('route.unshare') : t('route.share')}</ButtonShareStyle></>
    }

  }
  return (
    <MapWrapper>
      <MapContainerr>
        <RoutesCard className="routes">
          <ScrollDiv>
            <center>
              <h1>{t('navBar.routes')}</h1>
            </center>
            <center>
              {rutas.getNames().map((n, i) => <Button key={i} onClick={() => changeRuta(n,t)}> {n} </Button>)}
            </center>
          </ScrollDiv>
        </RoutesCard>
        <Map></Map>
        <RouteCard className="routes">
          <ScrollDiv>
            <RuteInformation {... {currentRuta}}></RuteInformation>
            <ButtonsWrapper>
            <Slider {... { media }}></Slider>
            <div id = "divSahred"><ButtonShare> </ButtonShare></div>
              {(currentRuta.shared !== undefined)?
                  <button onClick={() => ReactDOM.render(<NewRoute {...{ currentRuta }}></NewRoute>,
                      document.getElementById('mapComponent'))}>{t('route.edit')}</button>: <></>}
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