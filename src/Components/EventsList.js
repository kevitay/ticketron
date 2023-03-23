import React from "react";
import { useState } from "react";
import EventItem from "./EventItem";
import PageControls from './PageControls';

function EventsList(props) {
const [page, setPage] = useState(1);
// console.log(props)
let location = props.location;
let eventsArray = props.eventsList;
const eventsPerPage = 15;
let totalPages = Math.floor(eventsArray.length / eventsPerPage);
    
const nextPage = () => {
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
      <PageControls events={eventsArray} next={nextPage} prev={prevPage} pagenum={page} lastpage={totalPages} />
      {eventsArray.slice((page - 1) * eventsPerPage, page * eventsPerPage).map((event) => (
        <EventItem event={event} />
      ))}
      <PageControls events={eventsArray} next={nextPage} prev={prevPage} pagenum={page} lastpage={totalPages} />
    </div>
  );
}

export default EventsList; 