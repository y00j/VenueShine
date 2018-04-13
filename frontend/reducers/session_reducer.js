import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';
import {
  RECEIVE_BOOKMARK,
  REMOVE_BOOKMARK
} from '../actions/bookmark_actions';

const _nullUser = {
  currentUser: null
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  // debugger;
  let newState;
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState = merge({}, state);
      return merge(newState, {currentUser: action.currentUser});
    case RECEIVE_BOOKMARK:
      newState = merge({}, state);
      newState.currentUser.bookmarks.push(parseInt(action.id));
      return newState;
    case REMOVE_BOOKMARK:
      newState = merge({}, state);
      let bookmarkIdx = newState.currentUser.bookmarks.indexOf(parseInt(action.id));
      console.log(newState.currentUser);
      console.log(bookmarkIdx);
      newState.currentUser.bookmarks.splice(bookmarkIdx, 1);
      return newState;
    default: 
    return state;
  }
};

export default sessionReducer;
