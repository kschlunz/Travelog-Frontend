import React from 'react'
import { connect } from 'react-redux';
import {fetchTrips } from '../actions/tripAction';
import TripContainer from './TripContainer'
import TripForm from './TripForm'
import PropTypes from 'prop-types';
import GoogleMaps from '../components/GoogleMaps'
import { List, Header, Grid, Image } from 'semantic-ui-react'
import AllPlacesMap from '../components/AllPlacesMap'
import { Link } from 'react-router-dom';


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
    return (<h1>No Trips Yet</h1>)
  }
}

passToMap = () => {
  if(this.props.trips){
    console.log(this.props.trips.trips)
    return(<AllPlacesMap trip={this.props.trips.trips}/>)
  }else{
    return (<h1>No Trips Yet</h1>)
  }
}

  render () {

    return(
      <div >
        <center><p className="largetext">Travelog</p></center>
        <br></br>
          <Grid divided='vertically' columns={4} padded='horizontally'>
            <Grid.Row stretched verticalAlign='middle'>
              <Grid.Column width={2}>

              </Grid.Column>
              <Grid.Column width={7}>
                  {this.callTripContainer()}
              </Grid.Column>
              <Grid.Column width={6} verticalAlign='middle'>
                <TripForm />
              </Grid.Column>
              <Grid.Column width={8}>
              </Grid.Column>

            </Grid.Row>

          </Grid>
          <div className="hero-unit">
            <div className="hero-unit__background-image">
        </div>
        </div>

        <div class="ui vertical footer segment form-page">

          {this.passToMap()}
        </div>


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
