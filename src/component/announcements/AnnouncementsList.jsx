import React from 'react';
import AnnouncementCard from './AnnouncementCard';
import FakeAnnouncements from '../../FakeAnnouncements';
import styles from '../../css/AnnouncementsList.module.css';

export default function AnnouncementsList() {
  return (
    <div className={styles.announcementsContainer}>
      {FakeAnnouncements.map((announcement, index) => (
        <AnnouncementCard announcement={announcement} alt={index} />
      ))}
    </div>
  );
}
