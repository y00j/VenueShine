import React from 'react';
import { NavLink, Switch } from 'react-router-dom';
import UpcomingEventsContainer from "./upcoming_events_container";
import PastEventsContainer from './past_events_container';
import { ProtectedRoute } from '../../util/route_util';



const DashBoard = ({currentUsername, currentProfileImage}) => {
  const activeStyle = {
          fontWeight: 'bold',
          color: 'green',
          borderBottom: '3px solid blue',
        };

  return <div className="dash-board">
      <header>
        <h1>{currentUsername}</h1>
        <img className="profile-img" src={currentProfileImage} alt="profile-img" />
      </header>

      <NavLink 
        to="/dashboard/upcoming"
        activeStyle={activeStyle}
        >UPCOMING EVENT</NavLink>
      {/* <NavLink to="/dashboard/saved">SAVED EVENTS</NavLink> */}
      <NavLink 
        to="/dashboard/past"
        activeStyle={activeStyle}
        >PAST EVENTS</NavLink>

      <Switch>
        <ProtectedRoute path="/dashboard/upcoming" component={UpcomingEventsContainer} />
        <ProtectedRoute path="/dashboard/past" component={PastEventsContainer} />
      </Switch>
    </div>;

  

};


export default DashBoard;