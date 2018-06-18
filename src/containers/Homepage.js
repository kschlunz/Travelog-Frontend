import React from 'react'
import { connect } from 'react-redux';
import {fetchTrips } from '../actions/tripAction';
import TripContainer from './TripContainer'
import TripForm from './TripForm'
import PropTypes from 'prop-types';
import GoogleMaps from '../components/GoogleMaps'
import { List, Header, Grid, Image } from 'semantic-ui-react'


class Homepage extends React.Component {

componentDidMount(){

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
        <Header as='h1' textAlign= 'center'>Travelog</Header>
        <Header as='h3' textAlign='left'>{this.props.loggedIn ? <h3>Logged In</h3> : <h3>Please Login</h3>}</Header>
        <br></br>
          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column>
                {this.callTripContainer()}
              </Grid.Column>
              <Grid.Column>
                <TripForm />
              </Grid.Column>

            </Grid.Row>
          </Grid>



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
