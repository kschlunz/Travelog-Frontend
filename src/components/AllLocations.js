import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const AllLocations = (props) => {

  console.log(props.tripData.location)

    return (
    <li ><Link to={`/places/${props.tripData.locationID}`}><h2>Place: {props.tripData.location}</h2> </Link></li>

  )
}

export default AllLocations
