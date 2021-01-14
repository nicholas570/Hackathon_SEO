import React from 'react';
import { Helmet } from 'react-helmet';
import AnnouncementsList from '../announcements/AnnouncementsList';

function Search() {
  return (
    <div>
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
      La recherche
      <AnnouncementsList />
    </div>
  );
}

export default Search;
