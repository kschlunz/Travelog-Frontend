import React from 'react'
import TripList from '../components/TripList'


const TripContainer = (props) => {

  console.log(props.trip.trips.trips.map((t) =>{ return t}));


  return (
    <div>
      <ul>
       {props.trip.trips.trips.map((tripItem) =>{

         return <TripList tripData={tripItem} />
       })}
     </ul>

    </div>
  )
}

export default TripContainer
