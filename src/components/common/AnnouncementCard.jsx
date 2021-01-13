import React from 'react';
import styles from './AnnouncementCard.module.css';

export default function AnnouncementCard({ announcement }) {
  return (
    <div>
      <div className={styles.cardContainer}>
        <img
          className={styles.cardImage}
          src={announcement.logoSmall}
          alt="logo"
        />
        <div className={styles.cardDescription}>
          <h3>{announcement.name}</h3>
          <h4>{announcement.expertise}</h4>
          <p>{announcement.localisation}</p>
        </div>
        <button type="button">{announcement.prix}</button>
      </div>
    </div>
  );
}
