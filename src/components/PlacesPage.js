import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getPlace } from '../actions/tripAction';
import PlacesList from './PlacesList';
import { Link } from 'react-router-dom';
import NewEntriesForm from '../containers/NewEntriesForm'


class PlacesPage extends React.Component{
  state={locationID:''}

  componentDidMount(){
  const {id} =  this.props.match.params;
    this.props.getPlace(id);
    console.log({id})
    this.setState({
      locationID: id
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

export default connect(mapStateToProps,{getPlace})(PlacesPage)
