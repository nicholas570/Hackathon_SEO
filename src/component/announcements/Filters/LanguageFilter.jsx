import React from 'react';
import styles from '../../../css/AddFilter.module.css';

export default function LanguageFilter() {
  return (
    <div className={styles.blocFilter}>
      <p>Langage : &nbsp;</p>
      <select name="language" id="language-select">
        <option value="defaultLanguage">Choisir un langage</option>
        <option value="Javascript">Javascript</option>
      </select>
    </div>
  );
}
