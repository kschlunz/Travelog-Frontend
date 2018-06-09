import React from 'react'
import PropTypes from 'prop-types'

const TripList = (props) => {
  console.log(props)

    return (
    <li><h1>Trip: {props.tripData.name}</h1> <p>Dates: {props.tripData.dates}</p><p>Description:{props.tripData.description}</p></li>

  )
}

export default TripList
