import { FETCH_TRIPS, NEW_TRIP, GET_TRIP} from '../actions/types'

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

      case GET_TRIP:
      console.log(action.payload.id)
      return{
        ...state,
        [action.payload.id]: action.payload

      }
    default:
      return state;

  }
}
