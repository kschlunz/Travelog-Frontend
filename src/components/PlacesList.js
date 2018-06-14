import React from 'react'
import AllEntries from './AllEntries'
import { connect } from 'react-redux';
import { deleteEntry } from '../actions/tripAction';
import { Link } from 'react-router-dom'



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
    <div>
      <h1>{this.props.place.trip.location}</h1>

      <ul>
       {this.call()}
      </ul>
    </div>
  )
}

}


export default PlacesList
