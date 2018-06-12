import React from 'react'
import { connect } from 'react-redux';
import { createPlace } from '../actions/tripAction'
import PropTypes from 'prop-types';

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
      <div>
        <h1>Add A New Place</h1>
          <form onSubmit={this.handleSubmit}>

            <div>
              <label>Location:</label>
              <br />
              <input type="text" name="location" onChange={this.handleChange} value={this.state.location} />
            </div>
              <br />


            <button type="submit">Submit</button>

          </form>
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