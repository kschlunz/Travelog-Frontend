import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import Autofill from './Autofill'
import styles from './autocomplete.module.css';

class GoogleMapsContainer extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
      }
      // binding this to event-handler functions
      this.onMarkerClick = this.onMarkerClick.bind(this);
      this.onMapClick = this.onMapClick.bind(this);
    }
    onMarkerClick = (props, marker, e) => {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    }
    onMapClick = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    }
    render() {
      console.log(this.props.placeData.lat)

      const style = {
        width: '65vw',
        height: '65vh',
        'marginLeft': 'auto',
        'marginRight': 'auto'
      }
      return (
        <Map
          item
          xs = { 12 }
          style = { style }
          google = { this.props.google }
          onClick = { this.onMapClick }
          zoom = { 12 }
          initialCenter = {{ lat:this.props.placeData.lat, lng: this.props.placeData.lng }}
        >
          <Marker
            onClick = { this.onMarkerClick }
            title = { 'Changing Colors Garage' }
            position = {{ lat:this.props.placeData.lat, lng: this.props.placeData.lng}}
            name = { 'Changing Colors Garage' }
          />
          <InfoWindow
            marker = { this.state.activeMarker }
            visible = { this.state.showingInfoWindow }
          >

          </InfoWindow>
        </Map>
      );
    }
  }
  export default GoogleApiWrapper({
      apiKey: ("AIzaSyC4WyhZwCUxnclM61INQrbBQt4MH2qFm0E")
  })(GoogleMapsContainer)
