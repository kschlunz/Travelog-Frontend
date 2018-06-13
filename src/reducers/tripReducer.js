import { FETCH_TRIPS, NEW_TRIP, GET_TRIP, NEW_PLACE, GET_PLACE, NEW_ENTRY} from '../actions/types'

const initialState = {
  trips: [],
  trip: {},
  place:{},
  location:{},
  entry:{}
}

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_TRIPS:

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
      
      return{
        ...state,
        [action.payload.id]: action.payload
      }

      case NEW_PLACE:
        return{
          ...state,
          place: action.payload
        }

        case GET_PLACE:
        return{
          ...state,
          [action.payload.id]: action.payload
        }

        case NEW_ENTRY:
          return{
            ...state,
            entry: action.payload
          }

    default:
      return state;

  }
}
