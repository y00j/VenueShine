import * as APIUtil from '../util/ticket_order_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const createTicketOrders = (ticketOrders) => (dispatch) => (
  APIUtil.createTicketOrders(ticketOrders).then((data) => (
    dispatch(receiveCurrentUser(data))
  ))
);

 