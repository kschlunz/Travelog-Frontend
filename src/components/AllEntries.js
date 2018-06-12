import React from 'react'
import PropTypes from 'prop-types'

const AllEntries = (props) => {

  console.log(props.tripData)

    return (
    <li ><h2>Entry: {props.tripData.entryID} Place Description: {props.tripData.description} hotels: {props.tripData.hotels} restaurants: {props.tripData.restaurants} tours: {props.tripData.tours}</h2> </li>

  )
}

export default AllEntries
