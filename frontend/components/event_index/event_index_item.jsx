import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({event}) => {
  return <li className="event-index-item">
      <div className="event-index-inner-wrapper">
        <Link to={`/events/${event.id}`} className="">
          <img src={event.image} alt="pic-index-image" className="event-index-image" />

          <div className="event-index-details">
            <div className="event-date">{`${event.startDate}`}</div>
            <div className="event-title">{event.title}</div>
            <div className="event-location">{event.address}</div>
          </div>
        </Link>

        <div className="event-index-footer">
          <Link to="/">#Category</Link>
          <Link to="/">#b</Link>
        </div>
      </div>
    </li>;
};

export default EventIndexItem;