import React from 'react';
import styles from '../../../css/AddFilter.module.css';

export default function LocalisationFilter() {
  return (
    <div className={styles.blocFilter}>
      <p>Localisation : &nbsp;</p>
      <select name="localisation" id="localisation-select">
        <option value="defaultLocalisation">Choisir une localisation</option>
      </select>
    </div>
  );
}
