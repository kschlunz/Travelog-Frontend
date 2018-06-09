import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../actions/sessionActions';

class Login extends React.Component {

  state = {
    credentials: {username: '', password: ''}
  }

  onChange = (e) => {
    const field = e.target.name;
    const credentials = this.state.credentials;
    credentials[field] = e.target.value;
    return this.setState({credentials: credentials});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.actions.logInUser(this.state.credentials);
  }
  render() {
    return (
      <div>

        <form onSubmit={this.onSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.onChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.onChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(Login);
