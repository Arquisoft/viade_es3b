import { Map as DefaultMap, TileLayer, Marker, Polyline,Popup} from 'react-leaflet';
import React from 'react';


const style = {
  map: {
    height: '100%',
    width: '100%'
  }
}

export default class Map extends React.Component {
  constructor(props) {
    super();
    this.state = {
      points: [],
    };
    this.updatePoints = props.updatePoints; 
  }

  deleteMarker(position){
    let {points} = this.state
    points = points.filter(function(value){ return value !== position});
    this.setState({points});
    this.updatePoints(points);
  }
  
  addMarker = (e) => {
    const {points} = this.state
    points.push(e.latlng)
    this.setState({points})
    this.updatePoints(points);
  }

  render() {
    return (
      <DefaultMap 
        center={[43.355116, -5.851304]} 
        onClick={this.addMarker}
        zoom={13} 
        style={style.map}
        >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {this.state.points.map((position, idx) => 
          <><Marker key={`marker-${idx}`} position={position}>
            <Popup><button onClick = {() => this.deleteMarker(position)}>Eliminar</button></Popup>
          </Marker>
          <Polyline  color={'blue'} positions={this.state.points}></Polyline></>
        )}

      </DefaultMap>
    );
  }
}
