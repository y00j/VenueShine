import React from 'react';
import { Link } from 'react-router-dom';

const EventIndexItem = ({event}) => {
  return <li className="event-index-item">
      <div className="event-index-inner-wrapper">
        <Link to={`/events/${event.id}`}>
          <img src={event.image} alt="pic-index-image" className="event-index-image" />

          <div className="event-index-details">
            <div className="event-date">
              every friday {`${event.startDate}`}
            </div>
            <div className="event-title">{event.title}</div>
            <div className="event-location">{event.address}</div>
          </div>
        </Link>

        <div className="event-index-footer">
          <Link className="event-category" to="/">
            #Category
          </Link>
          <Link className="bookmark-icon" to="/">
            <i class="material-icons">bookmark_border</i>
          </Link>
        </div>
      </div>
    </li>;
};

export default EventIndexItem;