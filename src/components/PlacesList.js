import React from 'react'
import AllEntries from './AllEntries'
import { connect } from 'react-redux';
import { deleteEntry } from '../actions/tripAction';
import { Link } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'



class PlacesList extends React.Component  {



  call = () => {
    if (this.props.place.trip.entries){
      return this.props.place.trip.entries.map((tripItem) =>{

        return <AllEntries tripData={tripItem} />
      })
    }else {
      return (<h1>No Entries yet fam</h1>)
    }
  }

render(){
  return (
    <div class="ui segment">
      <h1 className="ui center aligned header">{this.props.place.trip.location}</h1>
      <ul>
        <Card.Group>
            {this.call()}
        </Card.Group>
      </ul>
    </div>
  )
}

}


export default PlacesList
