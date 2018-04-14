import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

function validateIdentifier(errors, data) {
  let newErrors = errors;
  if (Validator.isEmpty(data.identifier)) {
    newErrors.identifier = 'This field is required';
  }
  return newErrors;
}

function validatePassword(errors, data) {
  let newErrors = errors;
  if (Validator.isEmpty(data.password)) {
    newErrors.password = 'This field is required';
  }
  return newErrors;
}

function validateInput(data) {
  let errors = {};
  errors = validateIdentifier(errors, data);
  errors = validatePassword(errors, data);

  return {
    errors,
    isValid: isEmpty(errors),
  }
}

export default validateInput;
