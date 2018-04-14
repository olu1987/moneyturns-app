import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../components/form_input';
import formConstants from '../constants/form';
import validateInput from '../service/validation';
import flashMessages from '../constants/flashMessages';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false,
      invalid: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.pushFlashMessage = this.pushFlashMessage.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
    this.setUserExistsErrorMessage = this.setUserExistsErrorMessage.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        this.pushFlashMessage,
        err => this.setState({ errors: err.response.data, isLoading: false }),
      );
    }
  }

  setUserExistsErrorMessage(res, field) {
    const { errors } = this.state;
    const { nextErrors, invalid } = this.getErrors(errors, res, field);
    this.setState({ errors: nextErrors, invalid });
  }

  getErrors(errors, res, field) {
    const nextErrors = errors;
    let invalid;
    if (res.data.users[0] != null) {
      nextErrors[field] = `This ${field} is already registered`;
      invalid = true;
    } else {
      nextErrors[field] = '';
      invalid = false;
    }
    return { nextErrors, invalid };
  }

  checkUserExists(e) {
    const field = e.target.name;
    const val = e.target.value;
    if (val !== '') {
      this.props.isUserExists(val).then((res) => {
        this.setUserExistsErrorMessage(res, field);
      });
    }
  }

  pushFlashMessage() {
    this.props.addFlashMessage({
      type: flashMessages.SUCCESS_MESSAGE_TYPE,
      text: flashMessages.SUCCESS_MESSAGE_TEXT,
    });
    this.context.router.push('/dashboard');
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <h1>Signup and start saving</h1>
        <form onSubmit={this.onSubmit}>
          <FormInput
            name={formConstants.EMAIL_NAME}
            value={this.state.email}
            onChange={this.onChange}
            type={formConstants.EMAIL_TYPE}
            checkUserExists={this.checkUserExists}
            errors={errors}
          />
          <FormInput
            name={formConstants.USERNAME_NAME}
            value={this.state.username}
            onChange={this.onChange}
            type={formConstants.USERNAME_TYPE}
            checkUserExists={this.checkUserExists}
            errors={errors}
          />
          <FormInput
            name={formConstants.PASSWORD_NAME}
            value={this.state.password}
            onChange={this.onChange}
            type={formConstants.PASSWORD_TYPE}
            errors={errors}
          />
          <FormInput
            name={formConstants.PASSWORD_CONFIRMATION_NAME}
            title={formConstants.PASSWORD_CONFIRMATION_TITLE}
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            type={formConstants.PASSWORD_TYPE}
            errors={errors}
          />
          <div className="form-group">
            <button disabled={this.state.isLoading || this.state.invalid} type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired,
};

SignupForm.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default SignupForm;
