import * as APIUtil from '../util/event_api_util';
import { receiveErrors } from './session_actions';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';


const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});

const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events
});

export const fetchEvents = () => dispatch => (
  APIUtil.fetchEvents().then(events => (
    dispatch(receiveEvents(events))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchEvent = (id) => dispatch => (
  APIUtil.fetchEvent(id).then((event) => (
    (dispatch(receiveEvent(event)))
    , err => (
      dispatch(receiveErrors(err.responseJSON)))
  ))
);

export const createEvent = (event) => dispatch => (
  APIUtil.createEvent(event).then((data) => (
    dispatch(receiveEvent(data))
  )) 
);
