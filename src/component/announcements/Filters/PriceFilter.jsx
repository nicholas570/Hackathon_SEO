import React from 'react';
import styles from '../../../css/AddFilter.module.css';

export default function PriceFilter() {
  return (
    <div className={styles.blocFilter}>
      <p>Prix: &nbsp;</p>
      <select name="price" id="price-select">
        <option value="Javascript">Croissant</option>
        <option value="React">Décroissant</option>
      </select>
    </div>
  );
}
