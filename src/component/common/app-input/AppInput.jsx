import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../../../css/AppInput.module.css';

const AppInput = (props) => {
  const { type, label, placeholder, onChange, name, value } = props;

  return (
    <label className={Styles.appInputLabel} htmlFor={label}>
      {label}
      <input
        className={Styles.appInput}
        name={name}
        type={type}
        id={label}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

AppInput.defaultProps = {
  type: 'text',
  placeholder: ' ',
};

AppInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default AppInput;
