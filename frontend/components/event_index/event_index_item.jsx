import React from 'react';
import { Link, withRouter } from 'react-router-dom';



const EventIndexItem = ({event, toggleBookmark, isBookmarked}) => {
  let icon;
  if (isBookmarked) {
    icon = <i className="material-icons">bookmark</i>;
  } else {
    icon = <i className="material-icons">bookmark_border</i>;
  }

  return (
    <li className="event-index-item">
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
          <div onClick={() => toggleBookmark(event.id)}className="bookmark-icon" to="/">
            { icon }
          </div>
        </div>
      </div>
  </li>
  );
};

export default withRouter(EventIndexItem);