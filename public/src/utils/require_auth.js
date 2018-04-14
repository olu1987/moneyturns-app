import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { addFlashMessage } from '../actions/flash_messages';
import flashMessages from '../constants/flashMessages';

export default function(ComposedComponent) {
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.addFlashMessage({
          type: flashMessages.LOGIN_ERROR_TYPE,
          text: flashMessages.LOGIN_ERROR_MESSAGE,
        });
        this.context.router.push('/login');
      }
    }
    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: Proptypes.bool.isRequired,
    addFlashMessage: Proptypes.func.isRequired,
  }
  
  Authenticate.contextTypes = {
    router: Proptypes.object.isRequired,
  }
  
  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    };
  }
  
  return connect(mapStateToProps, { addFlashMessage })(Authenticate);
}

