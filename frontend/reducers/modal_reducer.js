import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import {merge} from 'lodash';

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return merge({}, state, { modalType: action.modal, eventId: action.eventId});
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
} 