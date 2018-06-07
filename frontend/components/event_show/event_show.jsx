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
    this.props
      .deleteEvent(this.props.event.id)
      .then(() => this.props.history.push("/"));
  }

  displayEventButtons() {
    if (this.props.currentUser) {
      if (this.props.event.organizer === this.props.currentUser.username) {
        return(
          <div className="event-buttons">
            <button onClick={this.handleDelete}>delete event</button>
            <Link className="edit-Link" to={`/events/${this.props.event.id}/edit`}>edit event</Link>
          </div> 
        );
      }
    } 

    return <div className="event-buttons"></div>;
  }

  render() {
    const event = this.props.event;
    if (!event || !event.tickets) {
      return <div>loading</div>;
    }

    let icon;
    if (this.props.currentUser) {
      if (this.props.currentUser.bookmarks.includes(parseInt(event.id))) {
        icon = <i className="material-icons">bookmark</i>;
      } else {
        icon = <i className="material-icons">bookmark_border</i>;
      }
    } else {
      icon = <i className="material-icons">bookmark_border</i>;
    }
    
    let eventStart = new Date(event.startDate);
    let eventEnd = new Date(event.endDate);
      
    return (

 
      <div className="event-show-outer-wrapper">
        <div className="event-show-wrapper">
          <div className="event-banner-container">
            <div className="event-banner-image">
              <img src={event.image} alt="event-image" />
            </div>
            <div className="event-banner-details">
              <div className="event-banner-details-major">
                <div className="banner-date">
                  <div className="banner-date-month">DATE</div>
                  <div className="banner-date-day">{eventStart.toDateString()}</div>
                </div>
                <div className="banner-title">{event.title}</div>
                <div className="banner-host">by {event.organizer}</div>
              </div>
              <div className="event-banner-details-minor">
                <p>${this.props.event.tickets[0].price}</p>
              </div>
            </div>
          </div>

          <div className="event-show-ticket-bar">
            <div
              onClick={() => this.props.toggleBookmark(event.id)}
              className="bookmark-icon"
            >
              {icon}
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
                  <p>Start Date: {event.startDate}</p>
                  <p>End Date: {event.endDate}</p>
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

          {this.displayEventButtons()}
        </div>
      </div>
    );
  }
}

export default withRouter(EventShow);