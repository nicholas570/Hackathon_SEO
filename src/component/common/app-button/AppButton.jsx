import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../css/AppButton.module.css';

function AppButton(props) {
  const { title, srcImg, altImg, isSubmit, disabled, onClick } = props;
  return (
    <button
      className={`${styles.appButton} ${disabled && styles.btnDisabled}`}
      type={isSubmit ? 'submit' : 'button'}
      disabled={disabled}
      onClick={onClick}
    >
      {srcImg && <img className={styles.btnIcon} src={srcImg} alt={altImg} />}
      {title}
    </button>
  );
}

AppButton.defaultProps = {
  srcImg: null,
  altImg: null,
  isSubmit: false,
  disabled: false,
  onClick: null,
};

AppButton.propTypes = {
  title: PropTypes.string.isRequired,
  srcImg: PropTypes.string,
  altImg: PropTypes.string,
  isSubmit: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default AppButton;
