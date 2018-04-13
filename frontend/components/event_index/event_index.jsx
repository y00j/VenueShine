import React from 'react';
import EventIndexItemContainer from './event_index_item_container';

class Event extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <div className="event-index-wrapper">
        <ul className="event-index-container">
          {
            this.props.events.map((event) =>  
              <EventIndexItemContainer key={event.id} event={event} />
            )
          }
        </ul>
      </div>
    );

  }
}

export default Event;