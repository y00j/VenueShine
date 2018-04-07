import React from 'react';
// import EventIndexItem from './event_index_item';

class Event extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    // debugger
    return (
      <ul>
        {
          this.props.events.map((event) =>  
            <div key={event.id}>
              <div>{event.title}</div>
              <img src={`${event.image_url}`} alt="stuff"/>  
            </div>
          )
        }
      </ul>
    )

  }
}

export default Event;