import React, { Component } from 'react'
import { Button } from 'reactstrap';
// import 'bulma/bulma';

import '../css/pages.css';
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

// import * as eggData from "../data/eggchair.json";

export class MapContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      map: {},
      traffic : {},
      transit : {},
      bicycling : {},
      list: ["Annex", "Egg Chair"]
    }
  }

  handleMapLoad = (map) => {
    this.setState({
      map: map,
      traffic : new window.google.maps.TrafficLayer(),
      transit : new window.google.maps.TransitLayer(),
      bicycling : new window.google.maps.BicyclingLayer(),
    })
  }

  handleLayer = (layer) => {
    console.log(this.state.map);
    switch (layer) {
      case "traffic" : 
        // this.state.transit.setMap(null);
        // this.state.bicycling.setMap(null);
        // this.google.maps.TransitLayer().setMap(document.getElementById("map"));
        // document.getElementById("map").TransitLayer().getMap
        // this.state.traffic.setMap((document.getElementById("map")));
        break;
      case "transit" :         
        // this.state.bicycling.setMap(null);
        // this.state.traffic.setMap(null); 
        // this.state.transit.setMap((document.getElementById("map")));
        break;  
      case "bicycling" : 
        // this.state.transit.setMap(null);
        // this.state.traffic.setMap(null); 
        // this.state.bicycling.setMap((document.getElementById("map")));
        break; 
      case "none" : 
        // this.state.transit.setMap(null);
        // this.state.traffic.setMap(null); 
        // this.state.bicycling.setMap(null);  
        break;     
    }          
  }

  onMarkerClick = (props, marker, e) =>
  // console.log("Clicked marker")
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  render() {
    const mapStyles = {
      width: '100%',
      height: '100%'
    };

    return (
      <div>Health and Wellness Map
        {/* <div className="content">
        <div className="container">
          <section className="section">
            <ul>
              {this.state.list.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div> */}
      <div>
      <Button color="secondary" onClick = {() => this.handleLayer("transit")}>Transit</Button>
      <Button onClick = {() => this.handleLayer("traffic")}>Traffic</Button>
      <Button onClick = {() => this.handleLayer("bicycling")}>Bicycling</Button>
      <Button onClick = {() => this.handleLayer("none")}>None</Button> 

      <Map
      id={"map"}
      google={this.props.google}
      zoom={15}
      style = {mapStyles}
      initialCenter={{lat: 34.4140, lng: -119.8489}}
      onMapLoad = {this.handleMapLoad}
      >
      <Marker
        onClick={this.onMarkerClick}
        title={'Egg Chair: UCSB Library Mountainside'}
        name={'Egg Chair'}
        position={{lat:34.413047, lng:-119.845567}}/>
      <Marker
        onClick={this.onMarkerClick}
        title={'Egg Chair: CAPS'}
        name={'Egg Chair'}
        position={{lat:34.413225, lng:-119.849233}}/>
      <Marker
        onClick={this.onMarkerClick}
        title={'Egg Chair: UCSB Library Oceanside'}
        name={'Egg Chair'}
        position={{lat:34.414297, lng:-119.845546}}/>
      <Marker
        onClick={this.onMarkerClick}
        title={'Egg Chair: GSA Lounge'}
        name={'Egg Chair'}
        position={{lat:34.411469, lng:-119.846670}}/>
      <Marker
        onClick={this.onMarkerClick}
        title={'Egg Chair: Santa Rosa Main Lounge'}
        name={'Egg Chair'}
        position={{lat:34.411267, lng:-119.845285}}/>
      <Marker
        onClick={this.onMarkerClick}
        title={'Egg Chair: Santa Catalina Fiesta Room'}
        name={'Egg Chair'}
        position={{lat:34.418319, lng:-119.867980}}/>
      <Marker
        onClick={this.onMarkerClick}
        title={'Egg Chair: Santa Cruz Lobby'}
        name={'Egg Chair'}
        position={{lat:34.409913, lng:-119.843420}}/>
      <Marker
        onClick={this.onMarkerClick}
        title={'UCSB: Community Gardens'}
        name={'UCSB'}
        position={{lat:34.420137, lng:-119.858604}}/>
      <Marker
        onClick={this.onMarkerClick}
        title={'Health and Wellness: Annex'}
        name={'HW'}
        position={{lat:34.413425, lng:-119.848173}}/>
      <Marker
        onClick={this.onMarkerClick}
        title={'Food: Isla Vista Co-op'}
        name={'Food'}
        position={{lat:34.411568, lng:-119.857600}}/>
      <Marker
        onClick={this.onMarkerClick}
        title={'Food: Isla Vista Co-op'}
        name={'Food'}
        position={{lat:34.411568, lng:-119.857600}}/>
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.name}</h1>
          </div>
      </InfoWindow>
      </Map>
      </div>   
      </div>  
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBZ44ehdGEJ74_EJsWhnBAPyHps2WRR3Hk'
})(MapContainer)


