import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import AnnouncementCard from './AnnouncementCard';
import styles from '../../css/AnnouncementsList.module.css';

export default function AnnouncementsList({ search }) {
  const [announcements, setannouncements] = useState([]);
  const history = useHistory();

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
      if (error) {
        console.error(error);
        history.push('/Connexion');
      }
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  return (
    <section className={styles.announcementsContainer}>
      {announcements
        .filter(
          (announcement) =>
            announcement.nom.toLowerCase().includes(search.toLowerCase()) ||
            announcement.localisation
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            announcement.expertise.toLowerCase().includes(search.toLowerCase())
        )
        .map((announcement, index) => (
          <AnnouncementCard
            key={announcement.id}
            announcement={announcement}
            alt={index}
          />
        ))}
    </section>
  );
}

AnnouncementsList.propTypes = {
  search: PropTypes.string.isRequired,
};
