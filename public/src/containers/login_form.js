import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import FormInput from '../components/form_input';
import formConstants from '../constants/form';
import { login } from '../actions/auth';
import validateInput from '../../shared/validation/login';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      identifier: '',
      password: '',
      errors: {},
      isLoading: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then((res) => {
        if (res.data.errors) {
          this.setState({ errors: res.data.errors, isLoading: false });
        } else {
          this.context.router.push('/dashboard');
        }
      });
    }
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  render() {
    const { identifier, password, errors, isLoading } = this.state;
    return (
      <div>
        <h1>Login</h1>
        {errors.form && <div className="alert alert-danger">{errors.form}</div>}
        <form onSubmit={this.onSubmit}>
          <FormInput
            name={formConstants.INDENTIFIER_NAME}
            value={identifier}
            onChange={this.onChange}
            type={formConstants.INDENTIFIER_TYPE}
            checkUserExists={this.checkUserExists}
            title={formConstants.INDENTIFIER_TITLE}
            errors={errors}
          />
          <FormInput
            name={formConstants.PASSWORD_NAME}
            value={password}
            onChange={this.onChange}
            type={formConstants.PASSWORD_TYPE}
            errors={errors}
          />
          <div className="form-group">
            <button disabled={isLoading} type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default connect(null, { login })(LoginForm);
