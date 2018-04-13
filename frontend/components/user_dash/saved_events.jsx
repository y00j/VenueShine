import React from "react";
import EventIndexItemContainer from "../event_index/event_index_item_container";
import { isEmpty } from 'lodash';

class SavedEvents extends React.Component {
  constructor(props) {
    super(props);
    this.getSavedEvents = this.getSavedEvents.bind(this);
  }

  componentDidMount() {
    this.props.fetchCurrentUser(this.props.currentUser.id);
    this.props.fetchEvents();
  }

  componentWillReceiveProps(nextProps) {
    if (isEmpty(this.props.events)) this.props.fetchEvents();
  }

  getSavedEvents() {
    let savedEvents = [];

    this.props.currentUser.bookmarks.forEach( id => savedEvents.push(this.props.events[id]));
    return savedEvents;
  }
  render() {
    if (isEmpty(this.props.events)) {
      return <div>loading</div>;
    }

    let savedEvents = this.getSavedEvents();
    if (savedEvents.length > 0) {
      return savedEvents.map(event => (
        <EventIndexItemContainer key={event.id} event={event} />
      ));
    } else {
      return null;
    }
  }
}

export default SavedEvents;
