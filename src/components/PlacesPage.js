import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getTrip } from '../actions/tripAction';

import { Link } from 'react-router-dom';


class PlacesPage extends React.Component{

//we will do a fetch to places to render each pages place


  render(){


    return(
      <div>
        <h1>Im a Places Page</h1>
      </div>
    )
  }
}



export default PlacesPage
