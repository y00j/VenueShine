import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  sessionLinks() {
    return(
      <div className="session-buttons">
        <div onClick={() => this.props.openModal('login')}>Login</div>
        <div onClick={() => this.props.openModal('signup')}>Signup</div>
      </div>
    );
  };

  render () {

    return(
      <nav className="navbar">
        <div>
          <div className="major">VenueShine</div>
        </div>
        {this.sessionLinks()}
    
      </nav>  
    );  
  }

}

export default Greeting