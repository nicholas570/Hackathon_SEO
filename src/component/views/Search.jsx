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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Des centaines d'offres de stage et alternance t'attendent, viens vite les découvrir"
        />
        <meta name="author" content="Les Stagiaires X Paye Ton Stage" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="canonical" href="http://mysite.com/example" />
        <title>Annonces</title>
      </Helmet>
      <div className={styles.announcementsPage}>
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
    </>
  );
}

export default Search;
