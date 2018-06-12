import React from 'react'
import PropTypes from 'prop-types'

const AllLocations = (props) => {

  console.log(props.tripData)

    return (
    <li ><h2>Place: {props.tripData.location}</h2> </li>

  )
}

export default AllLocations
