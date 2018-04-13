import React from 'react';
import { NavLink, Switch } from 'react-router-dom';
import UpcomingEventsContainer from "./upcoming_events_container";
import PastEventsContainer from './past_events_container';
import SavedEventsContainer from './saved_events_container';
import { ProtectedRoute } from '../../util/route_util';



const DashBoard = ({currentUsername, currentProfileImage}) => {
  const activeStyle = { borderBottom: "4px solid #1A91D5" };

  return <div className="dash-board">

    <div className="user-profile-wrapper">
      <header className="user-profile">
        <h1>{currentUsername}</h1>
        <img className="profile-img" src={currentProfileImage} alt="profile-img" />
      </header>
      <div className="links-container">
        <div className="upcoming-navlink">
          <NavLink to="/dashboard/upcoming" activeStyle={activeStyle}>
            UPCOMING EVENT
          </NavLink>
        </div>

        <div className="saved-navlink">
          <NavLink to="/dashboard/saved" activeStyle={activeStyle}>
            SAVED EVENTS
          </NavLink>
        </div>

        <div className="past-navlink">
          <NavLink to="/dashboard/past" activeStyle={activeStyle}>
            PAST EVENTS
          </NavLink>
        </div>
      </div>
    </div>

      <Switch>
        <ProtectedRoute path="/dashboard/upcoming" component={UpcomingEventsContainer} />
        <ProtectedRoute path="/dashboard/past" component={PastEventsContainer} />
        <ProtectedRoute path="/dashboard/saved" component={SavedEventsContainer} />
      </Switch>
    </div>;

  

};


export default DashBoard;