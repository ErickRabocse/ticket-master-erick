// https://app.ticketmaster.com/discovery/v2/events.json?apikey=BAw92mYJ3jAqnBzvrxmetmZqSc1Rt1OB

import EventItem from "./components/EventItem";
import eventsJSON from "../../data/events.json";
import { useState } from "react";
// const eventos = eventsJSON._embedded.events;

const Events = ({ searchTerm }) => {
  const [data] = useState(eventsJSON);
  const {
    _embedded: { events },
  } = data;
  const handleEventItemClick = (id) => {
    console.log("I was clicked: ", id);
  };
  const renderEvents = () => {
    let eventsFiltered = events;

    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return eventsFiltered.map((eventItem) => (
      <EventItem
        key={`event-item-${eventItem.id}`}
        image={eventItem.images[4].url}
        name={eventItem.name}
        info={eventItem.classifications[0].genre.name}
        id={eventItem.id}
        onEventClick={handleEventItemClick}
      />
    ));
  };

  return (
    <div>
      Eventos
      <br />
      {renderEvents()}
    </div>
  );
};

export default Events;
