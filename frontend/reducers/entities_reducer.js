import { combineReducers } from "redux";
import events from "./event_reducer";

const sessionsReducer = combineReducers({
  events
});

export default sessionsReducer; 