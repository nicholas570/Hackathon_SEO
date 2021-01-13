import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import style from '../../css/Header.module.css';

function HeaderLayout({ children }) {
  return (
    <>
      <header className={style.header}>
        <h1>Paye ton stage</h1>
        <FontAwesomeIcon
          style={{
            color: '#F8DDBE',
          }}
          icon={faShoppingCart}
        />
      </header>
      <div>{children}</div>
    </>
  );
}

HeaderLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderLayout;
