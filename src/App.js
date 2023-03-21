import {React, useReducer, useEffect, useState} from 'react';
import './App.css';
import EventsList from './Components/EventsList';
import FilterResults from './Components/FilterResults';
import LocationSearch from './Components/LocationSearch';

const initialState = {eventsList: []}

function reducer(state, action) {

  switch (action.type) {
    case 'Eventlist':
      return { ...state, eventsList: action.payload};
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  
  const getEvents = () => {
    console.log('You got here')
    setIsLoading(true);
    fetch('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=y4fgqxQmNBRy8u9y5IBixQXA56Zh0x3z&stateCode=IL',  {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
    })
    .then(response => response.json())
    //.then(data => data.filter(x => x.city === usestate: city))
    .then(data => { 
        dispatch({ type: 'Eventlist', payload: data })
        
    })
    .then(setIsLoading(false));
  }

  // useEffect(() => {getEvents()}, [])
  // useEffect(() => {console.log(state)}, [state])

  return (
    <div className='App'>
      <header>
        <h1>TicketTron 2.0</h1>
      </header>
      <main>
      <LocationSearch getEvents={getEvents} />
      <FilterResults />
      { isLoading ? "" : <EventsList eventsList={state} /> }
      </main>
    </div>
  );
}

export default App;
