import React from 'react'
import { connect } from 'react-redux';
import { createEntry } from '../actions/tripAction'
import PropTypes from 'prop-types';
import {Form, Button, TextArea} from 'semantic-ui-react'

class NewEntriesForm extends React.Component {
  state={
    description: '',
    place_id: '',
    restaurants: '',
    hotels: '',
    tours: '',
    user_id: 1,
    photos: '',

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
      user_id: this.state.user_id,
      photos: this.state.photos
    }

    this.setState({
      description: '',
      place_id: '',
      restaurants: '',
      hotels: '',
      tours: '',
      photos: ''

        })

        this.props.createEntry(newEntry);

  }

  render () {
    return(
      <div className="formpadding">
        <h3 className="formtext">Add A New Entry</h3>
          <Form onSubmit={this.handleSubmit}>

            <div className="fpadding">
              <label className="formtext">Description of Visit:</label>
              <br />
              <TextArea required type="text" name="description" onChange={this.handleChange} value={this.state.description} />
            </div>
              <br />

              <div>
                <label className="formtext">Restaurants:</label>
                <br />
                <TextArea  type="text" name="restaurants" onChange={this.handleChange} value={this.state.restaurants} />
              </div>
                <br />

                <div>
                  <label className="formtext">Accomodations:</label>
                  <br />
                  <TextArea type="text" name="hotels" onChange={this.handleChange} value={this.state.hotels} />
                </div>
                  <br />

                  <div>
                    <label className="formtext">Tours:</label>
                    <br />
                    <TextArea type="text" name="tours" onChange={this.handleChange} value={this.state.tours} />
                  </div>
                    <br />
                  <div>
                    <label  className="formtext">Photo Image URL:</label>

                      <input type="text" name="photos" onChange={this.handleChange} value={this.state.photos}/>
                  </div>

                  <br></br>
            <Button type="submit">Submit</Button>

          </Form>
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
