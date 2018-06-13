import React from 'react'
import { connect } from 'react-redux';
import { createEntry } from '../actions/tripAction'
import PropTypes from 'prop-types';

class NewEntriesForm extends React.Component {
  state={
    description: '',
    place_id: '',
    restaurants: '',
    hotels: '',
    tours: '',
    user_id: 1

  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const newEntry = {
      description: this.state.description,
      place_id: this.props.locationID,
      restaurants: this.state.restaurants,
      hotels: this.state.hotels,
      tours: this.state.tours,
      user_id: this.state.user_id
    }

    this.setState({
      description: '',
      place_id: '',
      restaurants: '',
      hotels: '',
      tours: '',

        })
        console.log(this.props.locationID);
        this.props.createEntry(newEntry);

  }

  render () {
    return(
      <div>
        <h1>Add A New Entry</h1>
          <form onSubmit={this.handleSubmit}>

            <div>
              <label>Description of Visit:</label>
              <br />
              <input type="text" name="description" onChange={this.handleChange} value={this.state.description} />
            </div>
              <br />

              <div>
                <label>Restaurants:</label>
                <br />
                <input type="text" name="restaurants" onChange={this.handleChange} value={this.state.restaurants} />
              </div>
                <br />

                <div>
                  <label>Accomodations:</label>
                  <br />
                  <input type="text" name="hotels" onChange={this.handleChange} value={this.state.hotels} />
                </div>
                  <br />

                  <div>
                    <label>Tours:</label>
                    <br />
                    <input type="text" name="tours" onChange={this.handleChange} value={this.state.tours} />
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
    createEntry: (newEntry) => {
      dispatch(createEntry(newEntry))
    }
  }

}



export default connect(null, mapDispatchToProps)(NewEntriesForm);