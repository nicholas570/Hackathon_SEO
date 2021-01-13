import React from 'react';
import { Helmet } from 'react-helmet';

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
        <title>Recherche</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      La recherche
    </div>
  );
}

export default Search;
