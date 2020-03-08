import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

import {
  MapContainer,
  H2prueba,
  Right,
  MapSection,
  Left,
  Center,
  Up,
  Down,
  H2Format,
  H3Format,
  imgFormat
} from './map.style';

const MapSize = styled.div`
height: $(props => props.height);
width: $(props => props.width)`
  ;

class Map extends React.Component {
  _isMounted = true;

  componentDidMount() {
    this._isMounted = true;

    if (this._isMounted) {
      this.map = L.map('map', {
        center: [58.16],
        zoom: 6,
        zoomControl: false
      });

      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        detectRetina: true,
        maxZoom: 20,
        maxNativeZoom: 17,
      }).addTo(this.map);
    }

  }

  componentWillUnmount() {
    this.abortController.abort();
  }

  render() { return <MapSize height="800px" width="800px" id="map"></MapSize> };
}

class RightForm extends React.Component {
  render() {
    return (
      <Right>
        <H2Format>Tus rutas</H2Format>
        <Up><H3Format>Tus rutas</H3Format></Up>
        <Down><H3Format>Rutas de amigos</H3Format></Down>
      </Right>
    );
  }
}

class LeftForm extends React.Component {
  render() {
    return (
      <Left>
        <H2Format>Multimedia</H2Format>
        <Up>
          <H3Format>Fotos</H3Format>

        </Up>
        <Down><H3Format>Videos</H3Format></Down>
      </Left>
    );
  }
}

class CenterForm extends React.Component {
  render() {
    return (
      <Center>
        <H2Format>Nombre de la ruta</H2Format>
          <h3>Descripcion</h3>
          <p>Esto es un ejemplo de descripción dkfgñsdljgdkgjsdñf
            flgsñdfglkjsdflgñkjsflkñgjsdfñlkgjsfdñlgs
            kgsdgsdlkgjsfdkgljsfdlñkgjsdñ
            dkjghsdfkgsfdñlgjñsdlkjlkfdgjksdfl
            sdghsdflgsdfgjhsdfjkgl
            kdjsghsdfkjghsdkl
          </p>
          <imgFormat>
         
          </imgFormat>
          
      </Center>
    );
  }
}


class Mapa extends React.Component {
  render() {
    return (
      <MapSection>
        <RightForm></RightForm>
        <CenterForm></CenterForm>
        <LeftForm></LeftForm>
      </MapSection>

    );
  }
}

export default Mapa;