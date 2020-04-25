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
      markers: [[19.4100819, -99.1630388]]
    };
  }
  
  addMarker = (e) => {
    const {markers} = this.state
    markers.push(e.latlng)
    this.setState({markers})
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
        {this.state.markers.map((position, idx) => 
          <Marker key={`marker-${idx}`} position={position}>
        </Marker>
        )}
      </Map>
    );
  }
}