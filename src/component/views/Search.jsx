import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import AnnouncementsList from '../announcements/AnnouncementsList';
import Searchbar from '../announcements/Searchbar';
import styles from '../../css/Search.module.css';

function Search() {
  const [search, setSearch] = useState('');
  return (
    <div className={styles.announcementsPage}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="La page de recherche" />
        <meta name="author" content="Les Stagiaires X Paye Ton Stage" />
        <meta
          name="keywords"
          content="stage, alternance, dev, developpeur, tech, etudes"
        />
        <title>Annonces</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h2>Les annonces</h2>
      <Searchbar search={search} setSearch={setSearch} />
      <AnnouncementsList search={search} />
    </div>
  );
}

export default Search;
