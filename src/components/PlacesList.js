import React from 'react'
import AllEntries from './AllEntries'



const PlacesList = (props) => {

console.log(props.place.trip)

  return (
    <div>
      <h1>{props.place.trip.location}</h1>
      <ul>
       {props.place.trip.entries.map((tripItem) =>{

         return <AllEntries tripData={tripItem} />
       })}
      </ul>
    </div>
  )
}

export default PlacesList
