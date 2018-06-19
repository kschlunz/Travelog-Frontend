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
      return (<h1>No Entries yet</h1>)
    }
  }

render(){
  return (
    <div>

        <Header as='h1' textAlign='left'><h1 className="tripname">{this.props.trip.trip.name}</h1></Header>
        <Header as='h3' textAlign='left'><p className="texttrip">{this.props.trip.trip.description}</p><p className="texttrip">Transportation: {this.props.trip.trip.flights}</p></Header>
        <br></br>
        <ul>
         {this.call()}
       </ul>
    </div>
  )
}

}


export default LocationList
