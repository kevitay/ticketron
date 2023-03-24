import React, { useReducer, useEffect, useState } from "react";
import "./App.css";
import EventsList from "./Components/EventsList";
import FilterResults from "./Components/FilterResults";
import LocationSearch from "./Components/LocationSearch";

const initialState = { eventsList: [] };

function reducer(state, action) {
  switch (action.type) {
    case "eventList":
      return { ...state, eventsList: action.payload };
    default:
      return state;
  }
}


function App() {
  function getLocationInput(location) {
        setLocation(location);
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const [location, setLocation] = useState({
    city: "",
    stateCode: "",
    countryCode: "US",
  });
  const [loading, setLoadState] = useState(false);

//--------useFeect will run get Events on load to populate the initial event items in to the event list ---//
  useEffect(() => {
    getEvents();
  }, []);
//--------When location state changes the use Effect hook will run get events and repopulate the results using the Location and City as part of the URL ----//
  useEffect(() => {
    getEvents();
  }, [location]);

//--------Fetch call to the API for dispatching to the initial state of the App. ------//
  const getEvents = () => {
    setLoadState(true);
    console.log("You got here");
    // console.log(location)
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=AGoronTU164njtX9HovbXILABk4pyQ00&stateCode=${location.stateCode}&city=${location.city}&size=100`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
    })
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'eventList', payload: data._embedded.events })

      })
      .then(setLoadState(false))

  }
//----------------------------------------------------------------------------------------------//


  // useEffect(() => {getEvents()}, [])
  // useEffect(() => {console.log(state)}, [state])

  return (
    <div className="App">
      <header>
      <h1>Ticketron 2.0</h1>
      <LocationSearch location={getLocationInput}/>
      </header>
      <main>
      {loading ? "" : <FilterResults eventsList={state.eventsList} reducer={dispatch}/>}
      {loading ? "" : <EventsList eventsList={state.eventsList} location={location} />}
      </main>
    </div>
  );
}

export default App;
