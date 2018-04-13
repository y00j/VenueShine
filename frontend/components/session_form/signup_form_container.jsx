import React from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { receiveErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';


const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: "signup",
  formText: "Get Started",

});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),

  otherForm: (
    <button
      className="title-button create-event"
      onClick={() => dispatch(openModal("login"))}
    >
      Login
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);