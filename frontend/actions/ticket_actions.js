import * as TicketAPIUtil from '../util/ticket_api_util';
import { receiveEvent, RECEIVE_EVENT } from './event_actions';

export const createTicket = (ticket) => (dispatch) => (
  TicketAPIUtil.createTicket(ticket).then((event) => (
    dispatch(receiveEvent(event))
  ))
);

