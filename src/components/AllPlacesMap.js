import React, { Component } from 'react';
import styles from './autocomplete.module.css';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import {connect} from 'react-redux'
import { createPlace } from '../actions/tripAction'
import {Form, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

class AllPlacesMap extends Component {
  state = {
    position: null,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    trip_id: this.props.id,
    placeData: {},
    center: {lat:0,lng:0}
  };


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

  callTrip = () => {

    if (this.props.trip){
      let tripArray = this.props.trip.map((t)=>{return t.places})
      let myNewArray4 = [].concat(...tripArray);
      let placesArray= myNewArray4.map((m)=> {
            return (<Marker onClick = { this.onMarkerClick }
                    position = {{lat:m.lat, lng:m.lng}} placeName = {m.location} />)
      })

      return placesArray
    }else {
      return (<h1>No info yet </h1>)
    }
  }

  render() {
    return (
      <div className={styles.flexWrapper}>
        <div className={styles.left}>
        </div>
        <br/>
        <br/>
        <br/>

        <div className={styles.right}>
          <Map
            {...this.props}
            center={this.state.center}
            zoom = {2.50}
            containerStyle={{
              height: '75vh',
              position: 'relative',
              width: '100%',

            }}>
            {this.callTrip()}

        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
          >

          <h1>{this.state.activeMarker.placeName}</h1>
        </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

export default connect(null, {createPlace})(GoogleApiWrapper({
    apiKey: ("AIzaSyC4WyhZwCUxnclM61INQrbBQt4MH2qFm0E")
})(AllPlacesMap))
