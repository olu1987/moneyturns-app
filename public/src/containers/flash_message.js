import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FlashMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.message.id);
  }
  render() {
    const { id, type, text } = this.props.message;
    let classNames = 'alert mt-5 ';
    if (type === 'success') {
      classNames += ' alert-success';
    } else if (type === 'error') {
      classNames += ' alert-danger';
    }
    return (
      <div className={classNames} >
       <button onClick={this.onClick} className="close"><span>&times;</span></button>
        {text}
      </div>
    );
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
}

export default FlashMessage;
