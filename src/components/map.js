/*global google*/
import React, { Component } from 'react'
import { Button } from 'reactstrap';
import { Map, GoogleApiWrapper, Marker, InfoWindow, MarkerWithLabel} from 'google-maps-react';
import "bootstrap/dist/css/bootstrap.css";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import '../css/pages.css';
import '../css/google_map_infobox.css';

export class MapContainer extends Component { 
  constructor(props){
    super(props);
    this.state = {
      map: {},
      traffic : {},
      transit : {},
      bicycling : {},
      list: ["Annex", "Egg Chair"],
      // shownMarkers:[],
      // hiddenMarkers:[]
      eggMarkers:[
        {
          "onClick": "this.onMarkerClick",
          "icon": '{"eggIcon"}',
          "title": "Egg Chair: UCSB Library Mountainside",
          "position": '{"lat": "34.41300", "lng": "-119.8489"}'
        },
        {
          "onClick": "this.onMarkerClick",
          "icon": '{"eggIcon"}',
          "title": "Egg Chair: CAPS",
          "position": '{"lat": "34.413000", "lng": "-119.845689"}'
        },
        {
          "onClick": "this.onMarkerClick",
          "icon": '{"eggIcon"}',
          "title": "Egg Chair: UCSB Library Oceanside",
          "position": '{"lat": "34.414297", "lng": "-119.845546"}'
        },
        {
          "onClick": "this.onMarkerClick",
          "icon": '{"eggIcon"}',
          "title": "Egg Chair: GSA Lounge",
          "position": '{"lat": "34.411469", "lng": "-119.846670"}'
        },
        {
          "onClick": "this.onMarkerClick",
          "icon": '{"eggIcon"}',
          "title": "Egg Chair: UCSB Santa Rosa Main Lounge",
          "position": '{"lat": "34.411267", "lng": "-119.845285"}'
        },
        {
          "onClick": "this.onMarkerClick",
          "icon": '{"eggIcon"}',
          "title": "Egg Chair: Santa Catalina Fiest Room",
          "position": '{"lat": "34.418319", "lng": "-119.867980"}'
        },
        {
          "onClick": "this.onMarkerClick",
          "icon": '{"eggIcon"}',
          "title": "Egg Chair: Santa Cruz Lobby",
          "position": '{"lat": "34.409913", "lng": "-119.843420"}'
        }
      ],

    gardenMarkers: [
      {
        "onClick": "this.onMarkerClick",
        "icon": '{"gardenIcon"}',
        "title": "UCSB: Community Gardens",
        "position": '{"lat": "34.420137", "lng": "-119.858604"}'
      }
    ]
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
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  updateMarkers = function(props, marker, e){
    switch(marker.eggbb){
      case "egg":
        if(this.state.checked == false){
          this.setState({
            eggMarkers: []
          });
        }
        else{
          this.renderEggMarkers()
        }
        break;
      case "garden":
        break;
    }
    // for( j = 0; j < markers.length; j++){
    //   if(this.state.checked == false){
    //     switch(category){
    //       case "egg":
    //         // marker.setVisible(false)
    //         break;
    //       case "garden":
    //         marker.setVisible(true)
    //         break;
    //       case "grocery":
    //         marker.setVisible(true)
    //         break;
    //     }
    //   }
    //   else{
    //     switch(category){
    //       case "egg":
    //         marker.setVisible(true)
    //         break;
    //       case "garden":
    //         marker.setVisible(true)
    //         break;
    //       case "grocery":
    //         marker.setVisible(true)
    //         break;
    //     }
    //   }
    // }
  }
    
  renderEggMarkers(){
    return this.state.eggMarkers.map((location, i) => {
      return <Marker
        key = {i}
        onClick = { this.onMarkerClick }
        icon = {require('../data/eggchair.png')}
        title = { location.title }
        position = { JSON.parse(location.position) }
         />
    })
  }

  render() {
    const {state} = this
    const mapStyles = {
      width: '100%',
      height: '100%'
    };
    const place = this.state.selectedPlace ? <div className="google_map_infobox"><h1>{state.selectedPlace.title}</h1></div>: null 
    const eggIcon = require('../data/eggchair.png')
    const gardenIcon = require('../data/garden.png')
    const groceryIcon = require('../data/grocery.png')
    
    return (
      <div >
      <div>Health and Wellness Map</div>
      <span class = 'nav'>Toggle on/off to see more locations</span>
      <div class='nav'>
        <BootstrapSwitchButton
        checked={true}
        onlabel='Show'
        onstyle='outline-danger'
        offlabel='Hide'
        offstyle='outline-light'
        style='w-24 mx-2'
        class='align-right'
        float = 'right'
        onChange="updateMarkers()"
        marker = 'egg'/><img class = "knop" src={eggIcon}></img></div>
      <div>
      <div class='nav'>
        <BootstrapSwitchButton
        checked={true}
        onlabel='Show'
        onstyle='outline-dark'
        offlabel='Hide'
        offstyle='outline-light'
        style='w-24 mx-2 border'
        class='align-right'
        float = 'right'
        onChange="updateMarkers()"
        marker = 'garden'/><img class = "knop" src={groceryIcon}></img></div>
      <div>
      <div class='nav'>
        <BootstrapSwitchButton
        checked={true}
        onlabel='Show'
        onstyle='outline-success'
        offlabel='Hide'
        offstyle='outline-light'
        style='w-24 mx-2'
        class='align-right'
        float = 'right'
        onChange="updateMarkers()"
        marker = 'egg'/><img class = "knop" src={gardenIcon}></img></div>
      <div>
      {/* <Button color="secondary" onClick = {() => this.handleLayer("transit")}>Transit</Button>
      <Button onClick = {() => this.handleLayer("traffic")}>Traffic</Button>
      <Button onClick = {() => this.handleLayer("bicycling")}>Bicycling</Button>
      <Button onClick = {() => this.handleLayer("none")}>None</Button>  */}
      </div>

      <Map
      id={"map"}
      google={this.props.google}
      zoom={15}
      style = {mapStyles}
      initialCenter={{lat: 34.4140, lng: -119.8489}}
      onMapLoad = {this.handleMapLoad}>
      {this.renderEggMarkers()}
      {/* <Marker
        onClick={this.onMarkerClick}
        icon={eggIcon}
        title={'Egg Chair: UCSB Library Mountainside'}
        name={'Egg Chair'}
        position={{lat:34.413000, lng:-119.845689}}
        filter={'egg'}/>
      <Marker
        onClick={this.onMarkerClick}
        icon={eggIcon}
        title={'Egg Chair: CAPS'}
        name={'Egg Chair'}
        position={{lat:34.413225, lng:-119.849233}}
        filter={'egg'}/>
      <Marker
        onClick={this.onMarkerClick}
        icon={eggIcon}
        title={'Egg Chair: UCSB Library Oceanside'}
        name={'Egg Chair'}
        position={{lat:34.414297, lng:-119.845546}}
        filter={'egg'}/>
      <Marker
        onClick={this.onMarkerClick}
        title={'Egg Chair: GSA Lounge'}
        icon={eggIcon}
        name={'Egg Chair'}
        position={{lat:34.411469, lng:-119.846670}}
        filter={'egg'}/>
      <Marker
        onClick={this.onMarkerClick}
        icon={eggIcon}
        title={'Egg Chair: Santa Rosa Main Lounge'}
        name={'Egg Chair'}
        position={{lat:34.411267, lng:-119.845285}}
        filter={'egg'}/>
      <Marker
        onClick={this.onMarkerClick}
        icon={eggIcon}
        title={'Egg Chair: Santa Catalina Fiesta Room'}
        name={'Egg Chair'}
        position={{lat:34.418319, lng:-119.867980}}
        filter={'egg'}/>
      <Marker
        onClick={this.onMarkerClick}
        icon={eggIcon}
        title={'Egg Chair: Santa Cruz Lobby'}
        name={'Egg Chair'}
        position={{lat:34.409913, lng:-119.843420}}
        filter={'egg'}/>
      <Marker
        onClick={this.onMarkerClick}
        title={'UCSB: Community Gardens'}
        name={'UCSB'}
        icon={gardenIcon}
        position={{lat:34.420137, lng:-119.858604}}
        filter={'garden'}/> */}
      <Marker
        onClick={this.onMarkerClick}
        title={'Health and Wellness: Annex'}
        name={'HW'}
        position={{lat:34.413425, lng:-119.848173}}
        filter={'hw'}/>
      <Marker
        onClick={this.onMarkerClick}
        icon={groceryIcon}
        title={'Food: Isla Vista Co-op'}
        name={'Food'}
        position={{lat:34.411568, lng:-119.857600}}
        filter={'food'}/>
      <Marker
        onClick={this.onMarkerClick}
        title={'Transfer Student Center: Library Mountainside'}
        name={'Resource'}
        position={{lat:34.413047, lng:-119.845567}}
        filter={'resource'}/>
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
        {place}
      </InfoWindow>
      </Map>
      </div> 
      </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBZ44ehdGEJ74_EJsWhnBAPyHps2WRR3Hk'
})(MapContainer)
