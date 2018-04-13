import React from "react";
import EventIndexItemContainer from "../event_index/event_index_item_container";

class PastEvents extends React.Component {
  constructor(props) {
    super(props);
    this.getPastEvents = this.getPastEvents.bind(this);
  }

  componentDidMount() {
    this.props.fetchCurrentUser(this.props.currentUser.id);
  }

  getPastEvents() {
    let events = this.props.events;
    let pastEvents = [];
    for (let event in events) {
      if (events[event].pastEvent === true) {
        pastEvents.push(events[event]);
      }
    }

    return pastEvents;
  }

  render() {
    if (!this.props.currentUser) {
      return <div>loading</div>;
    }
    let pastEvents = this.getPastEvents();
    if (pastEvents.length > 0) {
      
        return <div className="event-index-wrapper">
            <ul className="event-index-container">
              {pastEvents.map(event => (
                <EventIndexItemContainer key={event.id} event={event} />
              ))}
            </ul>
          </div>;
    
    } else {
      return null;
    }
  }
}

export default PastEvents;
