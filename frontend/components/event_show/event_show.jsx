import React from 'react';
import { withRouter } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    debugger;
    this.props.fetchEvent(parseInt(this.props.match.params.eventId));
  }

  render() {
    const event = this.props.event;
    if (event === undefined) {
      return <div>loading</div>;
    }
    return (
      <div>
        <img src={event.image} alt="event-image"/>
        <div>{event.title}</div>
        <div>description: {event.description}</div>
      </div>
    );
  }
}

export default EventShow;