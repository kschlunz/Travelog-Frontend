## Travelog
A digital memory journal for travel enthusiasts. A place to quickly record trips, places you visited on that trip, mark them on a map and add as many entries as you want with photos for that place.

I was inspired to build this project based on a problem I realized I have, which is I have traveled extensively but do not have a way of keeping an ongoing digital copy of the places and experiences I had. Rather than trying to carry around a journal which then ends up in a box somewhere I want a way to quickly record and share what I did in all of the places I visited.

## Screenshots

![I AM A PICTURE](https://i.imgur.com/lr6ZkW2.png)

Homepage!

![maps yo](https://i.imgur.com/IYHJGvD.png)

Shows a Google Map with all of a users saved places as markers.

![trip page](https://i.imgur.com/2QuYebf.png)
Trip page, each trip page has a google maps autofill bar to add places to that trip. 

![place page](https://i.imgur.com/vOKqUBN.png)
Place page, each place when added on the trip page creates a new page with journal entry. 

![place page](https://i.imgur.com/TsOj0RY.png)
Entry form for journal entries for that place. 

Back end repo here: https://github.com/kschlunz/Travelog-Backend

## Demo
https://youtu.be/PNzGll0-00Q

## Tech/framework used
React, Redux, Semantic UI, CSS, Google Maps API


## Features
The ability to make quick entries, save every place you visited on a map and organize them under trips. 

#### Get Request Using Redux 
````
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
````

#### Building Autocomplete search bar with Google Maps API in React-Redux
````
renderAutoComplete() {
    const { google} = this.props;
    const {map} = this.props.google.maps
    const autocomplete = new google.maps.places.Autocomplete(this.autocomplete);

     autocomplete.addListener('place_changed', () => {
       const place = autocomplete.getPlace();
       if (!place.geometry) return;
       if (place.geometry.viewport){
          const placeData = {
           location: place.name,
           lat: place.geometry.location.lat(),
           lng: place.geometry.location.lng(),
           trip_id: this.state.trip_id
         }
         this.setState({ position: place.geometry.location, placeData:placeData });
       }
     });
  }
  ````


## Installation
Clone down a copy, Run on the branch Final Maps. Run Yarn Install. Be sure you have cloned down the back end and run rails s before starting the front end local host.






## License


MIT © [Kate Schlunz]()
