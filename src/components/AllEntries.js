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
      <Image floated='right' size='large' src={this.props.tripData.photos} />
      <p>{this.props.tripData.description}</p>
      <p>hotels: {this.props.tripData.hotels}</p>
      <p>restaurants: {this.props.tripData.restaurants}</p>
      <p>tours: {this.props.tripData.tours}</p>

      <Button onClick={this.onDeleteClick}>Delete this entry</Button>
    </Card.Content>
  </Card>



)
}

}




export default connect(null, {deleteEntry})(AllEntries)
