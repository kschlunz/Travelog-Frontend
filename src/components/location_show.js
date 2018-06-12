import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getTrip } from '../actions/tripAction';

class LocationShow extends React.Component{

  componentDidMount(){
  const {id} =  this.props.match.params;
    this.props.getTrip(id);
  }


  render(){


    return(
      <div>
        <h3>SHOW TRIP PLACES</h3>
      </div>
    )
  }
}

function mapStateToProps({trips}, ownProps){
  return { trip: trips[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {getTrip})(LocationShow)
