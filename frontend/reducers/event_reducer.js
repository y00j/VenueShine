import merge from 'lodash/merge';
import { 
  RECEIVE_EVENTS, 
  RECEIVE_EVENT, 
  REMOVE_EVENT 
} from '../actions/event_actions';

const eventReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState; 
  switch(action.type) {
    case RECEIVE_EVENTS:
      return merge({}, action.events);
    case RECEIVE_EVENT: 
      newState = merge({}, state);
      newState[action.event.id] = action.event; 
      return newState;
    case REMOVE_EVENT:
      newState = merge({}, state);
      delete newState[action.eventId];
      return newState;
    default: 
      return state;
  }
};

export default eventReducer;
