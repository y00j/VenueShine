import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root';
import React from 'react';
import { login, logout } from './actions/session_actions';
import { fetchEvents, fetchEvent } from "./actions/event_actions";
import { createTicket } from "./actions/ticket_actions";


document.addEventListener('DOMContentLoaded', () => {


  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser} };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // window.store = store;
  const root = document.getElementById('root');
  // testing 
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.fetchEvents = fetchEvents;
  window.fetchEvent = fetchEvent;
  window.createTicket = createTicket;

  ReactDOM.render( <Root store={ store }/>, root);
});


