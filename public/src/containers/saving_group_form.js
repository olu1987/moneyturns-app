import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormInput from '../components/form_input';
import formConstants from '../constants/form';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      payment: '',
      errors: {},
      isLoading: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { title, description, payment, errors, isLoading } = this.state;
    return (
      <div>
        <h1>Create Saving Group</h1>
        {errors.form && <div className="alert alert-danger">{errors.form}</div>}
        <form onSubmit={this.onSubmit}>
          <FormInput
            name={formConstants.SAVING_GROUP_TITLE_NAME}
            value={title}
            onChange={this.onChange}
            type={formConstants.SAVING_GROUP_TITLE_TYPE}
            checkUserExists={this.checkUserExists}
            errors={errors}
          />
          <FormInput
            name={formConstants.SAVING_GROUP_DESCRIPTION_NAME}
            value={description}
            isTextArea={true}
            onChange={this.onChange}
            type={formConstants.SAVING_GROUP_DESCRIPTION_TYPE}
            errors={errors}
          />
          <FormInput
            name={formConstants.SAVING_GROUP_PAYMENT_NAME}
            value={payment}
            onChange={this.onChange}
            type={formConstants.SAVING_GROUP_PAYMENT_TYPE}
            errors={errors}
          />
          <div className="form-group">
            <button disabled={isLoading} type="submit" className="btn btn-primary">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null)(LoginForm);
