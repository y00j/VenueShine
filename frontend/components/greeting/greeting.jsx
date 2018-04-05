import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.sessionLinks = this.sessionLinks.bind(this)
  }

  sessionLinks() {
    return(
      <nav className="login-signup">
        <button onClick={() => this.props.openModal('login')}>Login</button>
        <br/>
        &nbsp;or&nbsp;
        <button onClick={() => this.props.openModal('signup')}>Signup</button>
      </nav>
    );``
  };


  render () {
  
    if (this.props.currentUser){
      return (
        <div>
          <h2>Hi, {this.props.currentUser.username}!</h2>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
  } else {
      return (
        this.sessionLinks()
      );
    }
  }

}

export default Greeting