import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import HeroBannerContainer from './hero_banner/hero_banner';
import EventIndexContainer from './event_index/event_index_container';
import EventCreateFormContainer from './event_form/event_create_form_container';
import EventEditFormContainer from './event_form/event_edit_form_container';
import EventShowContainer from './event_show/event_show_container';


const App = () => (
  <div>
    <header>
      <Route path="/" component={Modal} />
      <NavBarContainer />
    </header>
    <Route exact path="/" component={HeroBannerContainer} />
    <Route exact path="/" component={EventIndexContainer} />
    <Route exact path="/new" component={EventCreateFormContainer} />
    <Route exact path="/events/:eventId/edit" component={EventEditFormContainer} />
    <Route exact path="/events/:eventId" component={EventShowContainer} />
  </div>
);

export default App;