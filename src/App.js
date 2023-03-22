import {React, useReducer, useEffect, useState} from 'react';
import './App.css';
import EventsList from './Components/EventsList';
import FilterResults from './Components/FilterResults';
import LocationSearch from './Components/LocationSearch';

const initialState = {eventsList: []}

function reducer(state, action) {

  switch (action.type) {
    case 'eventList':
      return { ...state, eventsList: action.payload};
    default:
      return state;
  }
}

function App() {

  function getLocationInput(location) {
    setLocation(location);
  }


  const [state, dispatch] = useReducer(reducer, initialState);
  const [location, setLocation] = useState({city: "", stateCode: "", countryCode: "US"});
  const [loading, setLoadState] = useState(false)
  
useEffect(() => {
  getEvents();
}, [])

  useEffect(() => {
    getEvents();
  }, [location])

  const getEvents = () => {
    setLoadState(true)
    console.log('You got here')
    // console.log(location)
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=AGoronTU164njtX9HovbXILABk4pyQ00&stateCode=${location.stateCode}&city=${location.city}&size=100`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
    })
    .then(response => response.json())
    .then(data => { 
        dispatch({ type: 'eventList', payload: data._embedded.events })
        setLoadState(false)
    })

  }

  // useEffect(() => {getEvents()}, [])
  // useEffect(() => {console.log(state)}, [state])

  return (
    <div className='App'>
      <header>
        <h1>TicketTron 2.0</h1>
      </header>
      <main>
      <LocationSearch location={getLocationInput} />
      {loading ? "Loading..." : <FilterResults eventsList={state.eventsList} />}
      {loading ? "Loading..." : <EventsList eventsList={state.eventsList} />}
      </main>
    </div>
  );
}

export default App;
