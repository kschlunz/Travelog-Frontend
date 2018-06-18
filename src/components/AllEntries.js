import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { deleteEntry } from '../actions/tripAction';
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react'


class AllEntries extends React.Component {

  onDeleteClick = () => {
    const id =  this.props.tripData.entryID;
    console.log(id)
    this.props.deleteEntry(id)

  }



render(){

return (


  <Card>
    <Card.Content>
      <Image floated='right' size='mini' src='' />
      <Card.Description>Description: {this.props.tripData.description}</Card.Description>
      <Card.Description>hotels: {this.props.tripData.hotels}</Card.Description>
      <Card.Description>restaurants: {this.props.tripData.restaurants}</Card.Description>
      <Card.Description>  tours: {this.props.tripData.tours}</Card.Description>
      <Button onClick={this.onDeleteClick}>Delete this entry</Button>
    </Card.Content>
  </Card>



)
}

}




export default connect(null, {deleteEntry})(AllEntries)
