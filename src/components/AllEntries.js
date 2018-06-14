import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { deleteEntry } from '../actions/tripAction';
import { Link } from 'react-router-dom';

class AllEntries extends React.Component {

  onDeleteClick = () => {
    const id =  this.props.tripData.entryID;
    console.log(id)
    this.props.deleteEntry(id)
      
  }



render(){

return (
  <h3>
    Description: {this.props.tripData.description} <br/>
    hotels: {this.props.tripData.hotels} <br/>
    restaurants: {this.props.tripData.restaurants} <br/>
    tours: {this.props.tripData.tours}<br/><br/>
    <button onClick={this.onDeleteClick}>Delete this entry</button>
  </h3>
)
}

}




export default connect(null, {deleteEntry})(AllEntries)
