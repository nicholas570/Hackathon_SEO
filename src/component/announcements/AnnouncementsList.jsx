import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import AnnouncementCard from './AnnouncementCard';
import styles from '../../css/AnnouncementsList.module.css';

export default function AnnouncementsList({ search }) {
  const [announcements, setannouncements] = useState([]);

  const fetchAnnouncements = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_SERVER}/annonces`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
            'Access-Control-Allow-Origin': process.env.REACT_APP_SERVER,
          },
        }
      );

      const { annonces } = result.data;
      setannouncements(annonces);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  return (
    <section className={styles.announcementsContainer}>
      {announcements.length > 0 ? (
        announcements
          .filter(
            (announcement) =>
              announcement.nom.toLowerCase().includes(search.toLowerCase()) ||
              announcement.localisation
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              announcement.expertise
                .toLowerCase()
                .includes(search.toLowerCase())
          )
          .map((announcement, index) => (
            <AnnouncementCard
              key={announcement.id}
              announcement={announcement}
              alt={index}
            />
          ))
      ) : (
        <p>Pas d'annonce pour le moment</p>
      )}
    </section>
  );
}

AnnouncementsList.propTypes = {
  search: PropTypes.string.isRequired,
};
