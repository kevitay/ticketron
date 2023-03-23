import React from "react";
// {Name : 'Event', Date: '1/2/2023', 
// TicketPriceRange: '100-200', City: 'Bloomington', State: 'IL', Venue: 'Tom"s trunk barn'}
function EventItem({event}) {
    console.log(event)
    let eventDateTime = event.dates.start.dateTime;
    let formattedDateTime = new Date(eventDateTime).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
    return (
        <div className="eventItem">
            <div className="main-details">
            <h2>{event.name}</h2>
            <p>Date & Time: {formattedDateTime}</p>
            </div>
            <div className="location-details">
            <p>City: {event._embedded.venues[0].city.name}</p>
            <p>State: {event._embedded.venues[0].state.name}</p>
            <p>Venue: {event._embedded.venues[0].name}</p>
            </div>
            <p>Ticket price: {event.priceRanges ? '$' + event.priceRanges[0].min + '-' + '$' + event.priceRanges[0].max : 'No price to display'} </p>
            <img alt="Event logo" src={event.images[0].url}></img>
            <br></br>
            <a target="_blank" href={event.url}>Buy Tickets</a>
        </div>
    )
}

export default EventItem; 