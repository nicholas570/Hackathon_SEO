import React from 'react';
import ExpertiseFilter from './ExpertiseFilter';
import LanguageFilter from './LanguageFilter';
import LocalisationFilter from './LocalisationFilter';
import PriceFilter from './PriceFilter';
import StudiesFilter from './StudiesFilter';
import TypeFilter from './TypeFilter';
import styles from '../../../css/AddFilter.module.css';

export default function AddFilter() {
  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filters}>
        <TypeFilter />
        <PriceFilter />
        <LocalisationFilter />
        <StudiesFilter />
        <LanguageFilter />
        <ExpertiseFilter />
      </div>
      <button className={styles.buttonFiltrate}>Filtrer</button>
    </div>
  );
}
