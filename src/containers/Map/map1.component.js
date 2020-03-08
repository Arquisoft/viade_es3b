/* eslint-disable constructor-super */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */

/*import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './leaflet.css';
import {
  MapContainer,
  H2prueba,
  Derecha,
  MapSection,
  Button,
  MapSize
} from './map.style';

const HtmlLeaflet = ({ webId }: Props) => {
  console.log(webId);
  return (
    <html>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8"></meta>
        <link rel="stylesheet" href="Using%20GeoJSON%20with%20Leaflet%20-%20Leaflet%20-%20a%20JavaScript%20library%20for%20interactive%20maps_files/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin=""></link>
        <script src="Using%20GeoJSON%20with%20Leaflet%20-%20Leaflet%20-%20a%20JavaScript%20library%20for%20interactive%20maps_files/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossorigin=""></script>
    </html>
   
  );
};


const position = [51.505, -0.09]

const Map = ({ webId }: Props) => {
  console.log(webId);
  return (
    <MapSize>
      <LeafletMap center={position} zoom={13}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        
      </LeafletMap>
    </MapSize>
    

 
  );
};



/*class Map extends React.Component {
  render() {
    return (
      <MapSize>
        <LeafletMap
          center={[50, 10]}
          zoom={6}
          maxZoom={10}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={[50, 10]}>
            <Popup>
              Popup for any custom information.
            </Popup>
          </Marker>
        </LeafletMap>
      </MapSize>;
    );
  }
}

const styles = {
  wrapper: { 
    height: 400, 
    width: '80%', 
    margin: '0 auto', 
    display: 'flex' 
  },
  map: {
    flex: 1
  } 
};

class Mapa extends React.Component {
  render() {
    return (
        <MapSection>
          <MapContainer>
            <Moves></Moves>
          </MapContainer>
        </MapSection>
  
    );
  }
}

export default Mapa
*/


import { Map, TileLayer } from 'react-leaflet';
import L from 'leaflet';