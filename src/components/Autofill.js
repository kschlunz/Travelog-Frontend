import React, { Component } from 'react';
import styles from './autocomplete.module.css';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import {connect} from 'react-redux'
import { createPlace } from '../actions/tripAction'

class Autofill extends Component {
  state = {
    position: null,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    trip_id: this.props.id,
    placeData: {}
  };

  componentDidMount() {
    this.renderAutoComplete();

  }

  componentDidUpdate(prevProps) {

    if (this.props !== prevProps.map) this.renderAutoComplete();
  }

  onSubmit(e) {
    e.preventDefault();

  }

  renderAutoComplete() {
     const { google} = this.props;
    const {map} = this.props.google.maps
    // console.log(this.props.google.maps)
    // if (!google || !map) return;
    //
    const autocomplete = new google.maps.places.Autocomplete(this.autocomplete);
    //
    // autocomplete.bindTo('bounds', map);
     autocomplete.addListener('place_changed', () => {
       const place = autocomplete.getPlace();
       if (!place.geometry) return;
       if (place.geometry.viewport){
         console.log(place);
         console.log("location", `${place.geometry.location.lat()} ${place.geometry.location.lng()}`)

         const placeData = {
           location: place.name,
           lat: place.geometry.location.lat(),
           lng: place.geometry.location.lng(),
           trip_id: this.state.trip_id
         }
         this.setState({ position: place.geometry.location, placeData:placeData });
       }
     });
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.createPlace(this.state.placeData)
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
    const { position } = this.state;
      console.log({position})

    const markers = [<Marker
    onClick = { this.onMarkerClick }
    title = { 'Changing Colors Garage' }
    position = {position}
    name = { 'Changing Colors Garage' }
  />]
    return (
      <div className={styles.flexWrapper}>
        <div className={styles.left}>
          <form onSubmit={this.onSubmit}>
            <input
              placeholder="Enter a location"
              ref={ref => (this.autocomplete = ref)}
              type="text"
            />

          
            <button type="submit" onClick={this.handleSubmit}>Save Place</button><br/>
          </form>


        </div>
        <br/>
        <br/>
        <br/>
        <div className={styles.right}>
          <Map
            {...this.props}
            center={position}
            centerAroundCurrentLocation={true}
            containerStyle={{
              height: '75vh',
              position: 'relative',
              width: '100%',

            }}>
            {markers}

        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }

        />

          </Map>
        </div>
      </div>
    );
  }
}



export default connect(null, {createPlace})(GoogleApiWrapper({
    apiKey: ("AIzaSyC4WyhZwCUxnclM61INQrbBQt4MH2qFm0E")
})(Autofill))
