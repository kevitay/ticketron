import React from "react";
import EventItem from "./EventItem";

function EventsList() {
    return (
        <div>
            {/* update city, state based on user's location input */}
            <h2>Upcoming Events in Normal, IL</h2>
            {/* will eventually .map the events list array to populate how many events to return */}
            <EventItem />
        </div>
    )
}

export default EventsList; 