import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest, isUserExists } from '../actions';
import SignupForm from '../containers/signup_form';
import { addFlashMessage } from '../actions/flash_messages';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-6 pt-2 offset-sm-2 offset-md-3 form-wrap">
            <SignupForm
              isUserExists={isUserExists}
              userSignupRequest={userSignupRequest}
              addFlashMessage={addFlashMessage}
            />
          </div>
        </div>
      </div>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired,
};

export default connect(null , { userSignupRequest, addFlashMessage, isUserExists })(SignupPage);
