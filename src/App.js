import {React, useReducer} from 'react';
import './App.css';
import EventsList from './Components/EventsList';
import FilterResults from './Components/FilterResults';
import LocationSearch from './Components/LocationSearch';


function App() {

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
