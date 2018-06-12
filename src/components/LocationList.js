import React from 'react'
import AllLocations from './AllLocations'



const LocationList = (props) => {



  return (
    <div>
        <h1>{props.trip.trip.name}</h1>
        <p>Trip Description: {props.trip.trip.description}</p>
        <p>Trip Dates: {props.trip.trip.dates}</p>
        <p>Trip Transportation: {props.trip.trip.flights}</p>

        <ul>
         {props.trip.trip.places.map((tripItem) =>{

           return <AllLocations tripData={tripItem} />
         })}
       </ul>
    </div>
  )
}

export default LocationList
