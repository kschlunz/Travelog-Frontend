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

  componentWillReceiveProps(nextProps) {
      console.log(nextProps)
      if(nextProps.entry) {
        this.props.trip.entries.push(nextProps.entry)
       }
    }

  onDeleteClick = () => {
    console.log(this.props.trip.trip_id)
    const {id} =  this.props.match.params;
    this.props.deletePlace(id, () =>{
      this.props.history.push(`/trips/${this.props.trip.trip_id}`)
    })
  }

  linkBack = () => {

    if(this.props.trip){
      console.log(this.props)
      return (<Link to={`/trips/${this.props.trip.trip_id}`}>Back to Trip Page</Link>)
    }else {
      return(<h1>loading</h1>)
    }


  }


  callPlace = () => {

    if (this.props.trip){
      return (<PlacesList place = {this.props} />)
    }else {
      return (<h1>LOADING</h1>)
    }
  }

  render(){

    //if delete is true re-direct to teh same page


    return(
      <div>

        {this.linkBack()}
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
