import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom'

const App = () => (
  <div>
    <header>
      <h1>VenueShine</h1>
      <GreetingContainer />
    </header>
    <Switch>
      
    </Switch>
  </div>
);

export default App;