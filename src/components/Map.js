import React, { Component } from 'react';
// import { GoogleMap, Marker } from "react-google-maps"

const { compose } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require("react-google-maps");

class MapMarker extends Component {
  render() {
    const ab  = this.props.selectedCity;
    // console.log(ab);
    const mapObj = this.props.setMarker.cities;
    const mapMarker = [];
    
    Object.keys(mapObj).map(function(plot, value){
      // console.log(mapObj[plot]);
      Object.keys(mapObj[plot]).forEach((eachPlot, index) => {
        // console.log(mapObj[plot][eachPlot].lat + ',' + mapObj[plot][eachPlot].lng);
        if(plot === ab) {
          mapMarker.push(
            <Marker
              position={{ lat: mapObj[plot][eachPlot].lat, lng: mapObj[plot][eachPlot].lng }}
              key={'ab'+index}
            />
          );
        }
      });
    });
    return <div>{mapMarker}</div>;
  }
}

// delhi = 28.5272181, 77.0688997
// chennai = 13.0474878, 80.0689252
// Ahmedabad = 23.0201818, 72.4396567
// bangalore = 12.95396, 77.490853

class Map extends Component {
  render() {
    console.log(this.props.selectedCity);
    let latVal = null; 
    let lngVal = null;
    if(this.props.selectedCity === 'Ahmedabad') {
      latVal = 23.0201818; 
      lngVal = 72.4396567
    } else if(this.props.selectedCity === 'Bangalore') {
      latVal = 12.95396; 
      lngVal = 77.490853
    } else if(this.props.selectedCity === 'Chennai') {
      latVal = 13.0474878; 
      lngVal = 80.0689252
    } else if(this.props.selectedCity === 'Delhi') {
      latVal = 28.5272181; 
      lngVal = 77.0688997
    }
    const MapWithAMarker = compose(
      withScriptjs,
      withGoogleMap
    )(props =>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: latVal, lng: lngVal }}
      >
        <MapMarker setMarker={this.props.plots} selectedCity={this.props.selectedCity} />
      </GoogleMap>
    );
    return (
        <div className="col-md-3">
          <div className="map">
            <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `200px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
    );
  }
}

export default Map;
