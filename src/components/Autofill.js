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
    placeData: {},
    center: {lat:0,lng:0}
  };

  componentDidMount() {
    this.renderAutoComplete();
    this.calculateCenter();

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

  calculateCenter = () => {
    const places = this.props.trip.trip.places
    this.setState({center:{
      lat: places.reduce((total, place) => {
        return total+place.lat
      }, 0)/places.length ,
      lng: places.reduce((total, place) => {
        return total+place.lng
      }, 0)/places.length
    }})
  }

  render() {

    const { position } = this.state;


    const markers = this.props.trip.trip.places.map((place) => {
      return <Marker onClick = { this.onMarkerClick }
              position = {{lat:place.lat, lng:place.lng}} />
    })
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
            center={this.state.center}
            zoom = {6}
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

function mapStateToProps(state){
  state: state
}

export default connect(mapStateToProps, {createPlace})(GoogleApiWrapper({
    apiKey: ("AIzaSyC4WyhZwCUxnclM61INQrbBQt4MH2qFm0E")
})(Autofill))
