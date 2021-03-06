import * as APIUtil from '../util/session_api_util';
import { fetchUser } from '../util/user_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = user => dispatch => (
  APIUtil.login(user).then(data => (
    dispatch(receiveCurrentUser(data))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const signup = user => dispatch => (
  APIUtil.signup(user).then(data => (
   dispatch(receiveCurrentUser(data)) 
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);

export const fetchCurrentUser = (currentUserId) => dispatch =>
  fetchUser(currentUserId).then(user => dispatch(receiveCurrentUser(user))
);