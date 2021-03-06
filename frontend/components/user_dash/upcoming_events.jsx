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

    if (!this.props.currentUser) {
      return <div>loading</div>;
    }

    let futureEvents = this.getFutureEvents();

    if(futureEvents.length > 0)
    {
      return (
        <div className="event-index-wrapper">
           <ul className="event-index-container">
             {futureEvents.map(event => (
               <EventIndexItemContainer key={event.id} event={event} />
             ))}
           </ul>
         </div>
      ); 
    } else {
      return (null);
    }
  }
}

export default UpcomingEvents;