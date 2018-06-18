import React from 'react'
import AllLocations from './AllLocations'
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react'



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

        <Header as='h1' textAlign='center'>{this.props.trip.trip.name}</Header>
        <Header as='h3' textAlign='center'>{this.props.trip.trip.description} <br></br>{this.props.trip.trip.dates} <br></br>Transportation: {this.props.trip.trip.flights}</Header>

        <ul>
         {this.call()}
       </ul>
    </div>
  )
}

}


export default LocationList
