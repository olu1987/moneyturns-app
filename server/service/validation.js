import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

function validateEmail(errors, data) {
  let newErrors = errors;
  if (Validator.isEmpty(data.email)) {
    newErrors.email = 'This field is required';
  }
  if (!Validator.isEmail(data.email)) {
    newErrors.email = 'Email is invalid';
  }
  return newErrors;
}

function validateUsername(errors, data) {
  let newErrors = errors;
  if (Validator.isEmpty(data.username)) {
    newErrors.username = 'This field is required';
  }
  return newErrors;
}

function validatePassword(errors, data) {
  let newErrors = errors;
  if (Validator.isEmpty(data.password)) {
    newErrors.password = 'This field is required';
  }
  if (Validator.isEmpty(data.passwordConfirmation)) {
    newErrors.passwordConfirmation = 'This field is required';
  }
  if (!Validator.equals(data.password, data.passwordConfirmation)) {
    newErrors.passwordConfirmation = 'Passwords must match';
  }
  return newErrors;
}

function validateInput(data) {
  let errors = {};
  errors = validateEmail(errors, data);
  errors = validatePassword(errors, data);
  errors = validateUsername(errors, data);

  return {
    errors,
    isValid: isEmpty(errors),
  }
}

export default validateInput;
