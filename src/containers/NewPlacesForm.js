import React from 'react'
import { connect } from 'react-redux';
import { createPlace } from '../actions/tripAction'
import PropTypes from 'prop-types';
import {Form, Button, TextArea} from 'semantic-ui-react'

class NewPlacesForm extends React.Component {
  state={
    location: ""

  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const newPlace = {
      location: this.state.location,
      trip_id: this.props.id

    }

    this.setState({
          location: '', trip_id: ''
        })
        console.log(this.props.id);
        this.props.createPlace(newPlace);

  }

  render () {
    return(
      <div className="formpadding">
        <h1>Add A New Place</h1>

      </div>

    )

  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createPlace: (newPlace) => {
      dispatch(createPlace(newPlace))
    }
  }

}



export default connect(null, mapDispatchToProps)(NewPlacesForm);
