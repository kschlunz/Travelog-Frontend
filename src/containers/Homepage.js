import React from 'react'
import { connect } from 'react-redux';
import {fetchTrips } from '../actions/tripAction';
import TripContainer from './TripContainer'
import TripForm from './TripForm'


class Homepage extends React.Component {

componentDidMount(){
  this.props.fetchTrips()
  console.log(this.props, "are the props at time of mount");
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

const mapStateToProps = state => ({
  trips: state.trips.trips,
  loggedIn: state.session.loggedIn,
})

export default connect(mapStateToProps, { fetchTrips })(Homepage)
