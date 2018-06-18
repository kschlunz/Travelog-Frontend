import React from 'react'
import { connect } from 'react-redux';
import { createTrip } from '../actions/tripAction'
import PropTypes from 'prop-types';
import {Form, Button, TextArea} from 'semantic-ui-react'

class TripForm extends React.Component {
  state={
    name: "",
    date: "",
    flights: "",
    description: "",
    user_id: 1
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const newTrip = {
      name: this.state.name,
      description: this.state.description,
      date: this.state.date,
      flights: this.state.flights,
      user_id: this.state.user_id
    }

    this.setState({
          name: '', description: '', date: '', flights: ''
        })
        this.props.createTrip(newTrip);

  }

  render () {
    return(
      <div>
        <h1>Add A New Trip</h1>
          <Form onSubmit={this.handleSubmit}>

            <div>
              <label>Name:</label>
              <br />
              <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
            </div>
              <br />

              <div>
                <label>Description:</label>
                <br />
                <TextArea type="text" name="description" onChange={this.handleChange} value={this.state.description} />
              </div>
              <br />

                <div>
                  <label>Dates:</label>
                  <br />
                  <input type="date" name="date" onChange={this.handleChange} value={this.state.date} />
                </div>
                <br />

            <div>
              <label>Transportation:</label>
              <br />
              <TextArea type="text" name="flights" onChange={this.handleChange} value={this.state.flights} />
            </div>
            <br />
            <Button type="submit">Submit</Button>

          </Form>
      </div>

    )

  }
}

TripForm.propTypes = {
  createTrip: PropTypes.func.isRequired

}

export default connect(null, { createTrip })(TripForm);
