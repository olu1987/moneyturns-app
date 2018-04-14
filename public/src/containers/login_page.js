import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import LoginForm from './login_form';
import formConstants from '../constants/form';
import actions from '../actions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange() {

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-6 pt-2 offset-sm-2 offset-md-3 form-wrap">
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
