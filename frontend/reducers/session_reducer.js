import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';

const _nullUser = {
  currentUser: null
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state);
      return merge(newState, {currentUser: action.currentUser});
    default: 
    return state;
  }
};

export default sessionReducer;
