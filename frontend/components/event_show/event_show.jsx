import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props); 
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(parseInt(this.props.match.params.eventId));
  }

  handleDelete() {
    this.props.deleteEvent(this.props.event.id).then(() => this.props.history.push('/'));
  }
  

  render() {
    const event = this.props.event;
    if (event === undefined) {
      return <div>loading</div>;
    }
    return <div className="event-show-outer-wrapper">
        <div className="event-show-wrapper">
          <div className="event-banner-container">
            <div className="event-banner-image">
              <img src={event.image} alt="event-image" />
            </div>
            <div className="event-banner-details">
              <div className="event-banner-details-major">
                <div className="banner-date">
                  <div className="banner-date-month">MONTH</div>
                  <div className="banner-date-day">99</div>
                </div>
                <div className="banner-title">{event.title}</div>
                <div className="banner-host">by {event.organizerId}</div>
              </div>
              <div className="event-banner-details-minor">
                <p>$$$</p>
              </div>
            </div>
          </div>

          <div className="event-show-ticket-bar" >
            <div className="bookmark-icon">
              <i className="material-icons">bookmark_border</i>
            </div>
            <button onClick={() => this.props.openModal("register", event.id)}>
              TICKETS
            </button>
          </div>

          <div className="content-body">
            <div className="col-one-flex">
              <div className="col-one-pad">
                <h1>description</h1>
                <p>{event.description}</p>
              </div>
            </div>
            <div className="col-two-flex">
              <div className="col-two-pad">
                <div className="date-time-section">
                  <h1>date and time</h1>
                  <p>start date: {event.startDate}</p>
                  <p>end date: {event.endDate}</p>
                  <a href="#">Add to Calendar</a>
                </div>
                <div className="location-section">
                  <h1>Location</h1>
                  <p>{event.address}</p>
                  <a href="#">View Map</a>
                </div>
              </div>
            </div>
          </div>

          <div className="event-buttons">
            <button onClick={this.handleDelete}>delete event</button>
            <Link to={`/events/${event.id}/edit`}>edit event</Link>
          </div>
        </div>
      </div>;
  }
}

export default withRouter(EventShow);