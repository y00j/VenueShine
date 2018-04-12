import React from 'react';
import { NavLink } from 'react-router-dom';

const DashBoard = ({currentUsername, currentProfileImage}) => {
  return (
    <div className="dash-board">
      <header>
        <h1>{currentUsername}</h1>
        <img className="profile-img"src={currentProfileImage} alt="profile-img"/>
      </header>
    
      <NavLink to="/dashboard/upcoming">UPCOMING EVENT</NavLink>
      <NavLink to="/dashboard/saved">SAVED EVENTS</NavLink>
      <NavLink to="/dashboard/past">PAST EVENTS</NavLink>
    </div>
  );

  

};


export default DashBoard;