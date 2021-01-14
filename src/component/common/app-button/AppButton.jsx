import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../css/AppButton.module.css';

function AppButton(props) {
  const { title, srcImg, altImg, /* isSubmit, disabled */ onClick } = props;
  return (
    <button
      className={styles.appButton}
      // className={`${styles.appButton} ${disabled && styles.btnDisabled}`}
      type="button"
      // type={isSubmit ? 'submit' : 'button'}
      // disabled={disabled}
      onClick={() => onClick()}
    >
      {srcImg && <img className={styles.btnIcon} src={srcImg} alt={altImg} />}
      {title}
    </button>
  );
}

AppButton.defaultProps = {
  srcImg: null,
  altImg: null,
  // isSubmit: false,
  // disabled: false,
};

AppButton.propTypes = {
  title: PropTypes.string.isRequired,
  srcImg: PropTypes.string,
  altImg: PropTypes.string,
  // isSubmit: PropTypes.bool,
  // disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default AppButton;
