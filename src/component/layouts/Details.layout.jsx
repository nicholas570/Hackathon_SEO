import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faArrowCircleLeft,
} from '@fortawesome/free-solid-svg-icons';

import style from '../../css/HeaderAndFooter.module.css';

function DetailsLayout({ children }) {
  const history = useHistory();

  return (
    <>
      <header className={style.header}>
        <h1 className={style.brand}>Paye ton stage</h1>
        <FontAwesomeIcon
          style={{
            color: '#F8DDBE',
          }}
          icon={faShoppingCart}
        />
      </header>
      <section className={style.container}>{children}</section>

      <footer className={style.container}>
        <section>
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            className={style.arrow}
            onClick={() => history.push('/recherche')}
          />
          Retour aux annonces
        </section>
      </footer>
    </>
  );
}

DetailsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DetailsLayout;
