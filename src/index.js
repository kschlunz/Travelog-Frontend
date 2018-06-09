import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from './Store';
import routes from './routes'
import {Router, browserHistory} from 'react-router'

ReactDOM.render(
  
  <Provider store={Store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root'));
