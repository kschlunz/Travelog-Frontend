import { FETCH_TRIPS, NEW_TRIP } from './types'

export const fetchTrips = (dispatch) =>{
  return function(dispatch) {
    console.log("fetching trips")
    fetch('http://localhost:3000/api/v1/users/1')
    .then(res => res.json())
    .then(trips => {
      console.log(trips)
      return dispatch({
        type: FETCH_TRIPS,
        payload: trips
    })})
  }
}
