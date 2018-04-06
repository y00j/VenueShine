import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom'

import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import HeroBannerContainer from './hero_container/hero_banner'

const App = () => (
  <div>
    <header>
      <Modal />  
      <GreetingContainer />
    </header>
    <Switch>
      <Route path="/" component={HeroBannerContainer}/>
    </Switch>
  </div>
);

export default App;