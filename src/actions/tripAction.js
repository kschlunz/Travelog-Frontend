import { FETCH_TRIPS, NEW_TRIP, GET_TRIP, NEW_PLACE, GET_PLACE, NEW_ENTRY, DELETE_TRIP, DELETE_PLACE, DELETE_ENTRY} from './types'

export const fetchTrips = (dispatch) =>{
  return function(dispatch) {

    fetch('http://localhost:3000/api/v1/users/1')
    .then(res => res.json())
    .then(trips => {

      return dispatch({
        type: FETCH_TRIPS,
        payload: trips
    })})
  }
}

export const createTrip = (tripData) => (dispatch) => {

  fetch('http://localhost:3000/api/v1/trips',{
    method:'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(tripData)
  })
  .then(res => res.json())
  .then(tripData => dispatch({
    type: NEW_TRIP,
    payload: tripData
  }))
}

export const getTrip = (id) => (dispatch) =>{

  fetch( `http://localhost:3000/api/v1/trips/${id}`)
  .then(res => res.json())
  .then(trip => {
    console.log(trip)
    return dispatch({
      type: GET_TRIP,
      payload: trip
  })})
}

export const createPlace = (tripData) => (dispatch) => {


  fetch(`http://localhost:3000/api/v1/places`,{
    method:'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(tripData)
  })
  .then(res => res.json())
  .then(tripData => dispatch({
    type: NEW_PLACE,
    payload: tripData
  }))

}

export const getPlace = (id) => (dispatch) =>{
  console.log('get one place action')
  fetch( `http://localhost:3000/api/v1/places/${id}`)
  .then(res => res.json())
  .then(place => {
    console.log(place)
    return dispatch({
      type: GET_PLACE,
      payload: place
  })})
}

export const createEntry = (tripData) => (dispatch) => {

  console.log(tripData)
  fetch(`http://localhost:3000/api/v1/entries`,{
    method:'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(tripData)
  })
  .then(res => res.json())
  .then(tripData => dispatch({
    type: NEW_ENTRY,
    payload: tripData
  }))
}

export const deleteTrip = (id, callback) => (dispatch) =>{

  fetch( `http://localhost:3000/api/v1/trips/${id}`,{
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(trip => {

    return dispatch({
      type: DELETE_TRIP,
      payload: id
  })})
  .then(()=>callback())
}

export const deletePlace = (id, callback) => (dispatch) =>{

  fetch( `http://localhost:3000/api/v1/places/${id}`,{
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(trip => {

    return dispatch({
      type: DELETE_PLACE,
      payload: id
  })})
  .then(()=>callback())
}

export const deleteEntry = (id) => (dispatch) =>{
  console.log(id)
  fetch( `http://localhost:3000/api/v1/entries/${id}`,{
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(trip => {

    return dispatch({
      type: DELETE_ENTRY,
      payload: id
  })})

}
