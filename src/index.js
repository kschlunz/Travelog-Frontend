import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from './Store';
import routes from './routes'
import {Router, browserHistory} from 'react-router'
import { BrowserRouter, Route} from 'react-router-dom'
import Homepage from './containers/Homepage'
import LocationShow from './components/location_show'
import Login from './components/Login';
import PlacesPage from './components/PlacesPage'
import 'semantic-ui-css/semantic.min.css';
import AllPlacesMap from './components/AllPlacesMap'

ReactDOM.render(

  <Provider store={Store}>

    <BrowserRouter>

      <div>
          <Route path="/Login" component={Login}/>
          <Route path="/trips/:id" component={LocationShow}/>
          <Route path="/homepage" component={Homepage}/>
          <Route path="/places/:id" component={PlacesPage}/>


      </div>

    </BrowserRouter>
  </Provider>, document.getElementById('root'));
