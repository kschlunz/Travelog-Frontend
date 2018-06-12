import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const TripList = (props) => {

  console.log(props.tripData)

    return (
    <li ><h1><Link to={`/trips/${props.tripData.tripID}`}>Trip: {props.tripData.name}</Link></h1> <p>Dates: {props.tripData.dates}</p><p>Description:{props.tripData.description}</p></li>

  )
}

export default TripList
