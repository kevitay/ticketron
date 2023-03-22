import React from "react";
import { useState } from "react";
import EventItem from "./EventItem";
import PageControls from './PageControls';

function EventsList(props) {
  const [page, setPage] = useState(1);
// console.log(props)
let eventsArray = props.eventsList;
let location = props.location;
const eventsPerPage = 15;
    
const nextPage = () => {
  const totalPages = Math.floor(eventsArray.length / eventsPerPage);
  if (page < totalPages) {
    setPage(page + 1);
  }
}
    
const prevPage = () => {
  if (page > 1) {
    setPage(page - 1);
  }
}

    
// console.log(location, "location log")
// console.log(eventsArray)
    return (
      <div>
        <h2>Upcoming Events {location.city ? `in ${location.city}, ${location.stateCode}` : location.stateCode ? `in ${location.stateCode}` : ''}</h2>
        <PageControls events={eventsArray} next={nextPage} prev={prevPage} />
        {eventsArray.slice((page-1)*eventsPerPage, page*eventsPerPage).map((event) => (
        <EventItem event={event} />
        ))}
        
      </div>
    );
}

export default EventsList; 