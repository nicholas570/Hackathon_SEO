import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import AnnouncementsList from '../announcements/AnnouncementsList';
import Searchbar from '../announcements/Searchbar';
import styles from '../../css/Search.module.css';
import AddFilter from '../announcements/Filters/AddFilter';

function Search() {
  const [search, setSearch] = useState('');
  const [filterView, setFilterView] = useState(false);
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
      <main>
        <h2>Les annonces</h2>
        <Searchbar search={search} setSearch={setSearch} />
        <div
          className={
            filterView ? styles.filterButtonOn : styles.filterButtonOff
          }
          role="button"
          onClick={() => {
            setFilterView(!filterView);
          }}
        >
          <p>Filtrer</p>
          <span className={styles.arrowFilter}>&#728;</span>
        </div>
        {filterView ? <AddFilter filterView={filterView} /> : ''}
        <AnnouncementsList search={search} />
      </main>
    </div>
  );
}

export default Search;
