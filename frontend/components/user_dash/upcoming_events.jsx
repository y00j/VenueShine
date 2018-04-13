import React from 'react';
import EventIndexItemContainer from "../event_index/event_index_item_container";

class UpcomingEvents extends React.Component {
  constructor(props) {
    super(props);
    this.getFutureEvents = this.getFutureEvents.bind(this);
  }

  componentDidMount() {
    this.props.fetchCurrentUser(this.props.currentUser.id);
  }

  getFutureEvents() {
    let events = this.props.events;
    let futureEvents = [];
    for( let event in events) {
      if (events[event].pastEvent === false) {
        futureEvents.push(events[event]);
      }
    }

    return futureEvents;
  }

  render() {
    
    if (!this.props.events) {
      return <div>loading</div>;
    }
    let futureEvents = this.getFutureEvents();
    // debugger;
    if(futureEvents.length > 0)
    {
      return futureEvents.map(event => (
        <EventIndexItemContainer key={event.id} event={event} />
      ));
    } else {
      return (null);
    }
  }
}

export default UpcomingEvents;