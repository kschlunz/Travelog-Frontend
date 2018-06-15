import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import Autofill from './Autofill'
import styles from './autocomplete.module.css';

class GoogleMapsContainer extends React.Component {

  render() {

    return (


      <div>
          <Autofill />
      </div>


    );
  }
}
export default GoogleMapsContainer
