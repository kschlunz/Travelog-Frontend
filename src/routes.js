import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Homepage from './containers/Homepage';
import Login from './components/Login';

export default (
  <Route path="/" >
    <Route path="/Login" component={Login} />
    <Route path="/Homepage" component={Homepage} />
  </Route>
);

function requireAuth(nextState, replace) {
  if (!localStorage.token) {
    browserHistory.push('/Login')
  }
}
