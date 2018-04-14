import React from 'react';
import propTypes from 'prop-types';
import formConstants from '../constants/form';

function getErrors(props) {
  try {
    return props.errors.errors[props.name].message;
  } catch (e) {
    return props.errors[props.name];
  }
}

const FormInput = (props) => {
  const error = getErrors(props);
  const inputClass = error ? `${formConstants.INPUT_CSS_CLASS} ${formConstants.INPUT_ERROR_CSS_CLASS}` : formConstants.INPUT_CSS_CLASS;
  const textError = error ? formConstants.TEXT_ERROR_CSS_CLASS : '';
  const { checkUserExists } = props;
  const input = !props.isTextArea ? (
    <input
      type={props.type}
      className={inputClass}
      id={props.name}
      name={props.name}
      onChange={props.onChange}
      onBlur={checkUserExists}
      value={props.value}
    />
  ) : (
    <textarea
      type={props.type}
      className={inputClass}
      id={props.name}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  );
  
  return (
    <div className="form-group">
      <label className="text-capitalize" htmlFor={props.name}>{props.title || props.name}</label>
      { input }
      <span className={textError}>{error}</span>
    </div>
  );
}

FormInput.propTypes = {
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  checkUserExists: propTypes.func,
};

export default FormInput;

 