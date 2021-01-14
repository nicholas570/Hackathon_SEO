import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/Searchbar.module.css';

export default function Searchbar({ search, setSearch }) {
  return (
    <section className={styles.searchbar}>
      <input
        className={styles.searchbarContent}
        type="text"
        placeholder="Chercher un stage / alternance..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </section>
  );
}

Searchbar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};
