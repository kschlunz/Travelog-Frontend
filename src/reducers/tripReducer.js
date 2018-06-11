import { FETCH_TRIPS, NEW_TRIP} from '../actions/types'

const initialState = {
  trips: [],
  trip: {}
}

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_TRIPS:
      console.log("payload", action.payload)
      return{
        ...state,
        trips: action.payload
      }
      case NEW_TRIP:
      return {
        ...state,
        trip: action.payload
      }
    default:
      return state;

  }
}
