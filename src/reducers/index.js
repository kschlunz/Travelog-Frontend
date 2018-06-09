import { combineReducers } from 'redux';
import tripReducer from './tripReducer';
import session from './sessionReducer';

const rootReducer = combineReducers({

      trips: tripReducer,
      session: session
});

export default rootReducer;
