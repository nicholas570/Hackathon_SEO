import React from 'react';
import styles from '../../../css/AddFilter.module.css';

export default function ExpertiseFilter() {
  return (
    <div className={styles.blocFilter}>
      <p>Expertise : &nbsp;</p>
      <label htmlFor="fullStack">
        <input type="radio" id="fullStack" name="expertise" />
        Full Stack
      </label>
      <label htmlFor="frontEnd">
        <input type="radio" id="frontEnd" name="expertise" />
        Front-end
      </label>
      <label htmlFor="backEnd">
        <input type="radio" id="backEnd" name="expertise" />
        Back-end
      </label>
    </div>
  );
}
