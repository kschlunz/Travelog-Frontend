import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getPlace, deletePlace } from '../actions/tripAction';
import PlacesList from './PlacesList';
import { Link } from 'react-router-dom';
import NewEntriesForm from '../containers/NewEntriesForm'


class PlacesPage extends React.Component{
  state={locationID:''}

  componentDidMount(){
  const {id} =  this.props.match.params;
    this.props.getPlace(id);

    this.setState({
      locationID: id
    })
  }

  onDeleteClick = () => {
    console.log(this.props.trip.trip_id)
    const {id} =  this.props.match.params;
    this.props.deletePlace(id, () =>{
      this.props.history.push(`/trips/${this.props.trip.trip_id}`)
    })
  }



  callPlace = () => {

    if (this.props.trip){
      return (<PlacesList place = {this.props} />)
    }else {
      return (<h1>LOADING</h1>)
    }
  }

  render(){



    return(
      <div>


        {this.callPlace()}

        <button onClick={this.onDeleteClick}>Delete Place</button>

        <NewEntriesForm locationID = {this.state.locationID}/>
      </div>
    )
  }
}

function mapStateToProps({trips}, ownProps){
  return {
    trip: trips[ownProps.match.params.id],
    entry: trips.entry


  }
}

export default connect(mapStateToProps,{getPlace, deletePlace})(PlacesPage)
