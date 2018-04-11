import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { receiveErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  // debugger;
  return({
    errors: state.errors.session,
    formType: "login",
    formText: "Login"
  });
};

const mapDispatchToProps = (dispatch) => {

  return ({
    processForm: (user) => dispatch(login(user)),
    login: (user) => dispatch(login(user)),
    otherForm: (
      <button className="title-button" onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(receiveErrors([]))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);