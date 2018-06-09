import * as types from '../actions/types';
import initialState from './initialState';
import {browserHistory} from 'react-router';

export default function sessionReducer(state = initialState, action) {
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      browserHistory.push('/Homepage')
      return{
        ...state,
        loggedIn: !!localStorage.token
      }
    default:
      return state;
  }
}
