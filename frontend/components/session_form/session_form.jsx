import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }
 
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  demoLogin() {
    const demoUser = {
        username: "michael",
        password: "password",
      };
    this.props.login(demoUser).then(this.props.closeModal);
  }

  render() {
    let emailField;
    if (this.props.formType === "login") {
      emailField = "hidden";
    } else {
      emailField = "text";
    }
    return (
      <div className="login-form-container">
       
        <form onSubmit={this.handleSubmit} className="login-form-box">
          
          <div className="login-form">
              <h1 id="login-header">Let's get started</h1>

              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />

              <input type={emailField}
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email"
              />

              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"

              />
            <input className="session-submit" type="submit" value={this.props.formText} />
           
            <div className="demoLogin" onClick={this.demoLogin}>Demo Login</div>

            <div className="login-modal-title">
              Please {this.props.formType} or {this.props.otherForm}
              {this.renderErrors()}
            </div>  
          </div>
        </form>
        { this.props.altText } 
      </div>
    );
  }

}

export default withRouter(SessionForm);
