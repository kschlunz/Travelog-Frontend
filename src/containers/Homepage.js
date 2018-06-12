import React from 'react'
import { connect } from 'react-redux';
import {fetchTrips } from '../actions/tripAction';
import TripContainer from './TripContainer'
import TripForm from './TripForm'
import PropTypes from 'prop-types';



class Homepage extends React.Component {

componentDidMount(){
  console.log(this.props.fetchTrips);
  this.props.fetchTrips()
}

componentWillReceiveProps(nextProps) {
    if(nextProps.newTrip) {
      this.props.trips.trips.push(nextProps.newTrip)
    }
  }

callTripContainer = () => {
  if (this.props.trips){
    return (<TripContainer trip = {this.props} />)
  }else {
    return (<h1>No Trips Yet Fam</h1>)
  }
}

  render () {

    return(
      <div>
        {this.props.loggedIn ? <h1>Logged In</h1> : <h1>You ain't logged in</h1>}
        {this.callTripContainer()}
        <TripForm />
      </div>
    )

  }
}

Homepage.propTypes = {
  fetchTrips: PropTypes.func.isRequired,
  trips: PropTypes.array.isRequired,
  newTrip: PropTypes.object
}

const mapStateToProps = state => ({
  state: state,
  trips: state.trips.trips,
  newTrip: state.trips.trip,
  loggedIn: state.session.loggedIn,
})

export default connect(mapStateToProps, { fetchTrips })(Homepage)
