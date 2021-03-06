import React, { Component } from 'react';
import styles from './autocomplete.module.css';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import {connect} from 'react-redux'
import { createPlace, getPlace } from '../actions/tripAction'
import {Form, Button} from 'semantic-ui-react'

class Autofill extends Component {
  state = {
    position: null,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    trip_id: this.props.id,
    placeData: {},
    center: {lat:0,lng:0},
    fetch: false
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
    const autocomplete = new google.maps.places.Autocomplete(this.autocomplete);

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
    if(this.props.trip.trip.places){
      return(this.setState({center:{
        lat: places.reduce((total, place) => {
          return total+place.lat
        }, 0)/places.length ,
        lng: places.reduce((total, place) => {
          return total+place.lng
        }, 0)/places.length
      }}))
    }else{
      return(<h1>no info yet</h1>)
    }

  }

  callTrip = () => {
    if (this.props.trip.trip.places){
      return (this.props.trip.trip.places.map((place) => {
        return <Marker onClick = { this.onMarkerClick }
                position = {{lat:place.lat, lng:place.lng}} />
      }))
    }else {
      return (<h1>No info yet </h1>)
    }
  }

  render() {
    const { position } = this.state;
    return (
      <div className='outmapdiv'>
        <div className='mapdiv'>
          <Form onSubmit={this.onSubmit}>
            <input
              required
              placeholder="Enter a location"
              ref={ref => (this.autocomplete = ref)}
              type="text"
            />
          <Button type="submit" onClick={this.handleSubmit}>Save Place</Button><br/>
          </Form>
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
              height: '85vh',
              position: 'relative',
              width: '100%',

            }}>
            {this.callTrip()}

        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
          >

          <h1></h1>
        </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  state: state
}

export default connect(mapStateToProps, {createPlace, getPlace})(GoogleApiWrapper({
    apiKey: ("AIzaSyC4WyhZwCUxnclM61INQrbBQt4MH2qFm0E")
})(Autofill))
