import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getPlace, deletePlace } from '../actions/tripAction';
import PlacesList from './PlacesList';
import { Link } from 'react-router-dom';
import NewEntriesForm from '../containers/NewEntriesForm'
import GoogleMaps from './GoogleMaps'
import {Form, Button} from 'semantic-ui-react'
import { Container, Divider, Grid } from 'semantic-ui-react'


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

      if(nextProps.entry) {
        this.props.trip.entries.push(nextProps.entry)
       }
    }

  onDeleteClick = () => {

    const {id} =  this.props.match.params;
    this.props.deletePlace(id, () =>{
      this.props.history.push(`/trips/${this.props.trip.trip_id}`)
    })
  }

  linkBack = () => {

    if(this.props.trip){

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

  passDataToMap = () => {
    if(this.props.trip){
      return(<GoogleMaps placeData={this.props.trip} />)
    }else {
      return (<h1>LOADING</h1>)
    }
  }

  render(){

    return(


      <div>

        <br></br>
        <div class="ui clearing segment">
        <Container textAlign='left'><h3 className="ui left floated header">{this.linkBack()}</h3></Container>
        <Container textAlign='right'><Button class="ui right floated button header" onClick={this.onDeleteClick}>Delete Place</Button></Container>
        <Container textAlign='center'><h1>{this.callPlace()}</h1></Container>
      </div>

      <Grid divided='vertically'>
        <Grid.Row columns={3}>
          <Grid.Column>
            <NewEntriesForm locationID = {this.state.locationID}/>
          </Grid.Column>
          <Grid.Column>
            {this.passDataToMap()}
          </Grid.Column>
        </Grid.Row>
      </Grid>







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
