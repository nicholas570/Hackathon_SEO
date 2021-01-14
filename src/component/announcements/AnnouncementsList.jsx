import React from 'react';
import PropTypes from 'prop-types';
import AnnouncementCard from './AnnouncementCard';
import FakeAnnouncements from '../../FakeAnnouncements';
import styles from '../../css/AnnouncementsList.module.css';

export default function AnnouncementsList({ search }) {
  return (
    <section className={styles.announcementsContainer}>
      {FakeAnnouncements.filter(
        (announcement) =>
          announcement.nom.toLowerCase().includes(search.toLowerCase()) ||
          announcement.localisation
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          announcement.expertise.toLowerCase().includes(search.toLowerCase())
      ).map((announcement, index) => (
        <AnnouncementCard announcement={announcement} alt={index} />
      ))}
    </section>
  );
}

AnnouncementsList.propTypes = {
  search: PropTypes.string.isRequired,
};
