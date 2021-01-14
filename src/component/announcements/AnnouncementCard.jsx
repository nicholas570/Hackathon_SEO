import React from 'react';
import styles from '../../css/AnnouncementCard.module.css';
import announcementPropType from '../prop-types/AnnouncementPropTypes';

export default function AnnouncementCard({ announcement }) {
  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.cardImage}
        src={announcement.logo_small}
        alt="logo"
      />
      <div className={styles.cardDescription}>
        <h3>{announcement.nom}</h3>
        <h4>{announcement.expertise}</h4>
        <p>{announcement.localisation}</p>
      </div>
      <button className={styles.cardButton} type="button">

        {`${announcement.prix}€`}
      </button>
    </div>
  );
}

AnnouncementCard.propTypes = announcementPropType;
