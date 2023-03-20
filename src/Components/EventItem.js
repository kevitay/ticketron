import React from "react";
// {Name : 'Event', Date: '1/2/2023', 
// TicketPriceRange: '100-200', City: 'Bloomington', State: 'IL', Venue: 'Tom"s trunk barn'}
function EventItem(props) {
    console.log(props.event.Name)
    const D = props.event
    return (
        <div>
            <h2>Name: {D.Name}</h2>
            <p>Date: {D.Date}</p>
            <p>City: {D.City}</p>
            <p>State: {D.State}</p>
            <p>Venue: {D.Venue}</p>
            <p>Ticket price: {D.TicketPriceRange}</p>
            <img alt="Event logo"></img>
            <a href="?">link to seat selection page</a>
            <hr />
        </div>
    )
}

export default EventItem; 