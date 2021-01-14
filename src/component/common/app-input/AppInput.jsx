import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../../../css/AppInput.module.css';

const AppInput = (props) => {
  const { type, label, placeholder } = props;

  return (
    <label className={Styles.appInputLabel} htmlFor={label}>
      {label}
      <input
        className={Styles.appInput}
        type={type}
        id={label}
        placeholder={placeholder}
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
};

export default AppInput;
