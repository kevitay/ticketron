import React from "react";
// {Name : 'Event', Date: '1/2/2023', 
// TicketPriceRange: '100-200', City: 'Bloomington', State: 'IL', Venue: 'Tom"s trunk barn'}
function EventItem({event}) {
    console.log(event)
    let eventDateTime = (event.dates.start.dateTime ? event.dates.start.dateTime : Date('9999/12/31'));
    let formattedDateTime = new Date(eventDateTime).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
    return (
      <div className="eventItem">
        <div className="main-details">
          <img alt="Event logo" src={event.images[0].url}></img>
          <h3>{event.name}</h3>
          <br />
          <p>{eventDateTime === '9999/12/31' ? 'TBD' : formattedDateTime}</p>
        </div>
        <div className="location-details">
          <p>
            {event._embedded.venues[0].city.name}, {event._embedded.venues[0].state.name}
          </p>
          <p>Venue: {event._embedded.venues[0].name}</p>
        </div>
        <div className="prices">
          <p>{event.priceRanges ? '$' + event.priceRanges[0].min + '-' + '$' + event.priceRanges[0].max : 'No price to display'} </p>
        </div>
        <a target="_blank" href={event.url}>
          Buy Tickets
        </a>
      </div>
    );
}

export default EventItem; 