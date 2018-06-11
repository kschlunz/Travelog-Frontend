import React from 'react'
import TripList from '../components/TripList'


const TripContainer = (props) => {

   const places = props.trip.trips.places.map((place) => place )


  return (
    <div>
      <ul>
       {props.trip.trips.trips.map((tripItem) =>{

         return <TripList tripData={tripItem} places={places}/>
       })}
     </ul>

    </div>
  )
}

export default TripContainer
