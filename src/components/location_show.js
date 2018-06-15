import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getTrip, deleteTrip } from '../actions/tripAction';
import LocationList from './LocationList';
import { Link } from 'react-router-dom';
import NewPlacesForm from '../containers/NewPlacesForm'
import GoogleMaps from './GoogleMaps'
import Autofill from './Autofill'

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

  onDeleteClick = () => {
    const {id} =  this.props.match.params;
    this.props.deleteTrip(id, () =>{
      this.props.history.push('/homepage')
    })
  }

  render(){



    return(
      <div>
        <button onClick={this.onDeleteClick}>Delete Trip</button>
        <Link to='/homepage' class="btn-primary">Back To All Trips</Link>
        {this.callTrip()}
        <NewPlacesForm id={this.state.id}/>
        <Autofill id={this.state.id} />
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
