import React from 'react';
import PropTypes from 'prop-types';

import style from '../../css/Header.module.css';

function HeaderLayout({ children }) {
  return (
    <div>
      <header className={style.header}>
        <h1>Le header</h1>
      </header>
      <div>{children}</div>
    </div>
  );
}

HeaderLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderLayout;
