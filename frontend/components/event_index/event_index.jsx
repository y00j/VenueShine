import React from 'react';
import EventIndexItem from './event_index_item';

class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    // debugger
    return (
      <ul className="event-index-container">
        {
          this.props.events.map((event) =>  
            <EventIndexItem key={event.id} event={event} />
          )
        }
      </ul>
    );

  }
}

export default Event;