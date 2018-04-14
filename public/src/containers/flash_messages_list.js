import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlashMessage from './flash_message';
import { deleteFlashMessage } from '../actions/flash_messages';

class FlashMessagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderMessages = this.renderMessages.bind(this);
  }

  renderMessages(message) {
    const { deleteFlashMessage } = this.props;
    return (
      <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage} />
    );
  }

  render() {
    const messages = this.props.messages.map(this.renderMessages);
    return (
      <div>
        {messages}
      </div>
    );
  }
}

FlashMessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    messages: state.flashMessages,
  }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);
