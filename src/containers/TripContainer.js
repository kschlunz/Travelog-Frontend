import React from 'react'
import TripList from '../components/TripList'


const TripContainer = (props) => {
  console.log(props.trip.trips.trips)
  const trip = props.trip.trips.trips.map((t) => console.log(t.name))


  return (
    <div>
      <ul>
       {props.trip.trips.trips.map((tripItem) =>{
         return <TripList tripData={tripItem}/>
       })}
     </ul>

    </div>
  )
}

export default TripContainer
