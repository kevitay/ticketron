import React from "react";
import EventItem from "./EventItem";




function EventsList(props) {
// console.log(props)
let eventsArray = props.eventsList; 
let location = props.location;

// console.log(location, "location log")
// console.log(eventsArray)
    return (
     
        <div>

            {/* update city, state based on user's location input */}
            <h2>Upcoming Events {location.city ? `in ${location.city}, ${location.stateCode}`: location.stateCode ? `in ${location.stateCode}` : ""}</h2>
            {/* will eventually .map the events list array to populate how many events to return */}
            {eventsArray?.map((event) => <EventItem event={event}/>)}
        </div>
    )
}

export default EventsList; 