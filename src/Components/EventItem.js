import React from "react";
// {Name : 'Event', Date: '1/2/2023', 
// TicketPriceRange: '100-200', City: 'Bloomington', State: 'IL', Venue: 'Tom"s trunk barn'}
function EventItem({event}) {
    // console.log(event)

    return (
        <div>
            <h2>Name: {event.name}</h2>
            <p>Date: {event.dates.start.localDate}</p>
            <p>Time: {event.dates.start.localTime}</p>
            <p>City: {event._embedded.venues[0].city.name}</p>
            <p>State: {event._embedded.venues[0].state.name}</p>
            <p>Venue: {event._embedded.venues[0].name}</p>
            <p>Ticket price: {event.priceRanges ? '$' + event.priceRanges[0].min + '-' + '$' + event.priceRanges[0].max : 'No price to display'} </p>
            <img alt="Event logo" src={event.images[0].url}></img>
            <br></br>
            <a target="_blank" href={event.url}>Buy Tickets</a>
            <hr />
        </div>
    )
}

export default EventItem; 