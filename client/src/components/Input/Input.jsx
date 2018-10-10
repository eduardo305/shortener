import React from 'react';

const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div
    className={
      touched[field.name]
        ? errors[field.name]
          ? 'field-container error'
          : 'field-container success'
        : 'field-container'
    }
  >
    <p>{props.label}</p>
    <input
      type={props.type || 'text'}
      className={`field ${props.className || ''}`}
      disabled={props.disabled}
      {...field}
      {...props}
    />
    {!props.disabled && <span className="icon" />}
    {touched[field.name] &&
      errors[field.name] && <small>{errors[field.name]}</small>}
  </div>
);

export default CustomInputComponent;
