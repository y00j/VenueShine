import React from 'react';

const EventIndexItem = ({event}) => {
  return <div className="event-index-item">
      <h1>title: {event.title}</h1>
      <img src={event.image} alt="pic-index-image" />
      <div>address: {event.address}</div>
      <div>date: {`${event.startDate}`}</div>
    </div>;
};

export default EventIndexItem;