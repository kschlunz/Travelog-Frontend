import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getTrip, deleteTrip } from '../actions/tripAction';
import LocationList from './LocationList';
import { Link } from 'react-router-dom';
import NewPlacesForm from '../containers/NewPlacesForm'
import GoogleMaps from './GoogleMaps'
import Autofill from './Autofill'
import { Container, Divider, Button, Grid, Image } from 'semantic-ui-react'



class LocationShow extends React.Component{

 state= {id: ''}

  componentDidMount(){
  const {id} =  this.props.match.params;
    this.props.getTrip(id);
    console.log({id})
    this.setState({
      id: id
    })
  }

  componentWillReceiveProps(nextProps) {

      if(nextProps.place) {
        this.props.trip.places.push(nextProps.place)
       }
    }

  callTrip = () => {

    if (this.props.trip){
      return (<LocationList trip = {this.props} />)
    }else {
      return (<h1>No info yet </h1>)
    }
  }

  passTripInfor = () => {
    if (this.props.trip){
      return (<Autofill trip = {this.props} id={this.state.id} />)
    }else {
      return (<h1>No info yet </h1>)
    }
  }

  onDeleteClick = () => {
    const {id} =  this.props.match.params;
    this.props.deleteTrip(id, () =>{
      this.props.history.push('/homepage')
    })
  }

  render(){


    return(


      <div class="ui clearing segment">
        <h2><Link textAlign='left' to='/homepage'>Back To All Trips</Link></h2><br></br>
        <Button textAlign='left' onClick={this.onDeleteClick}>Delete Trip</Button>

        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              {this.callTrip()}
            </Grid.Column>
            <Grid.Column>
              {this.passTripInfor()}
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>

    )
  }
}

function mapStateToProps({trips}, ownProps){
  return {
    trip: trips[ownProps.match.params.id],
    place: trips.place

  }
}

export default connect(mapStateToProps, {getTrip, deleteTrip})(LocationShow)
