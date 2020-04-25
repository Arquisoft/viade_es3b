import { Map, TileLayer, Marker, Polyline} from 'react-leaflet';
import React from 'react';


const style = {
  map: {
    height: '1000px',
    width: '60%'
  }
}

export default class NewRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: [[19.4100819, -99.1630388]],
      polyline : [[19.4100819, -99.1630388]]
    };
  }
  
  addMarker = (e) => {
    const {markers,polyline} = this.state
    markers.push(e.latlng)
    polyline.push(e.latlng)
    console.log(polyline);
    this.setState({markers,polyline})
  }

  render() {
    return (
      <Map 
        center={[19.4100819, -99.1630388]} 
        onClick={this.addMarker}
        zoom={13} 
        style={style.map}
        >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {this.state.polyline.map(() => 
           <Polyline  color={'blue'} positions={this.state.polyline}></Polyline>
        )}
        {this.state.markers.map((position, idx) => 
          <Marker key={`marker-${idx}`} position={position}></Marker>
        )}

      </Map>
    );
  }
}