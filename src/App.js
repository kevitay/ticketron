import React from 'react';
import './App.css';
import EventsList from './Components/EventsList';
import FilterResults from './Components/FilterResults';
import LocationSearch from './Components/LocationSearch';

function App() {
  return (
    <div>
      <LocationSearch />
      <FilterResults />
      <EventsList />
    </div>
  );
}

export default App;
