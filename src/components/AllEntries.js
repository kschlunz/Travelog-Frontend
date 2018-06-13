import React from 'react'
import PropTypes from 'prop-types'

const AllEntries = (props) => {

  console.log(props.tripData)

    return (
    <h3>Description: {props.tripData.description} <br/> hotels: {props.tripData.hotels} <br/> restaurants: {props.tripData.restaurants} <br/> tours: {props.tripData.tours}<br/><br/> <button>Delete this entry</button></h3> 

  )
}

export default AllEntries
