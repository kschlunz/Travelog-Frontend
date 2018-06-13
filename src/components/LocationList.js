import React from 'react'
import AllLocations from './AllLocations'
import { Link } from 'react-router-dom';



class LocationList extends React.Component {

  call = () => {
    if (this.props.trip.trip.places){
      return this.props.trip.trip.places.map((tripItem) =>{

        return <AllLocations tripData={tripItem} />
      })
    }else {
      return (<h1>No Entries yet fam</h1>)
    }
  }

render(){
  return (
    <div>

        <h1>{this.props.trip.trip.name}</h1>
        <p>Trip Description: {this.props.trip.trip.description}</p>
        <p>Trip Dates: {this.props.trip.trip.dates}</p>
        <p>Trip Transportation: {this.props.trip.trip.flights}</p>

        <ul>
         {this.call()}
       </ul>
    </div>
  )
}

}


export default LocationList
