import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getTrip } from '../actions/tripAction';
import LocationList from './LocationList';
import { Link } from 'react-router-dom';
import NewPlacesForm from '../containers/NewPlacesForm'

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
      console.log(nextProps);
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


  render(){

    console.log(this.state.id)

    return(
      <div>
        <Link to='/homepage' class="btn-primary">Back To All Trips</Link>
        {this.callTrip()}
        <NewPlacesForm id={this.state.id}/>
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

export default connect(mapStateToProps, {getTrip})(LocationShow)
