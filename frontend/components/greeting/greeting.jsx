import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  sessionButtons() {
    if (this.props.currentUser) {
      return (
        <div className="session-buttons">
          <a href="#" onClick={this.props.logout}>logout</a>
        </div>
      );
    } else {
       
        return (
        <div className="session-buttons">
          <a href="#" id="login-button" onClick={() => this.props.openModal('login')}>sign in</a>
          <a href="#" id="signup-button" onClick={() => this.props.openModal('signup')}>create account</a>
        </div>
      );
    }
   
  }

  render () {

    return(
      <nav className="navbar">
        <div className="nav-major">
          <a id="logo" href="#">VenueShine</a>
        </div>
        <div className="nav-minor">
          {this.sessionButtons()}
          <Link className="create-event"to="/new">Create Event</Link>
        </div>
      </nav>  
    );  
  }

}

export default Greeting;