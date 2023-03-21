import {React, useReducer} from 'react';
import './App.css';
import EventsList from './Components/EventsList';
import FilterResults from './Components/FilterResults';
import LocationSearch from './Components/LocationSearch';


function App() {
  const initialState = {events: []}
  
  function reducer(state, action) {

    switch (action.type) {
      case 'Eventlist':
        return { ...state, events: action.payload};
      default:
        return state;
    }
  }
  
  const [events, dispatch] = useReducer((reducer, initialState)) 
  
  const getEvents = () => {
    fetch('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=y4fgqxQmNBRy8u9y5IBixQXA56Zh0x3z&stateCode=IL',  {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
    })
    .then(response => response.json())
    //.then(data => data.filter(x => x.city === usestate: city))
    .then(data => { 
        dispatch({ type: 'Eventlist', payload: data })
    });
  }
  return (
    <div className='App'>
      <header>
        <h1>TicketTron 2.0</h1>
      </header>
      <main>
      <LocationSearch />
      <FilterResults />
      <EventsList events={events} />
      </main>
    </div>
  );
}

export default App;
