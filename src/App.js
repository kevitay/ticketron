import React from 'react';
import './App.css';
import EventsList from './Components/EventsList';
import FilterResults from './Components/FilterResults';
import LocationSearch from './Components/LocationSearch';

function App() {

  function getLocationInput(location) {
    console.log(location);
    return location;
  }

  return (
    <div className='App'>
      <header>
        <h1>TicketTron 2.0</h1>
      </header>
      <main>
        <LocationSearch location={getLocationInput} />
      <FilterResults />
      <EventsList />
      </main>
    </div>
  );
}

export default App;
