import React from 'react'
import { connect } from 'react-redux';
import {fetchTrips } from '../actions/tripAction';
import TripContainer from './TripContainer'


class Homepage extends React.Component {

componentDidMount(){
  this.props.fetchTrips()
}

  render () {

    return(
      <div>
        <TripContainer trip = {this.props.trips} />
      </div>
    )

  }
}

const mapStateToProps = state => ({
  trips: state.trips.trips
})

export default connect(mapStateToProps, { fetchTrips })(Homepage)
