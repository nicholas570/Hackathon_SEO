import React from 'react';
import { Helmet } from 'react-helmet';

function Search() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="La page de recherche" />
        <title>Recherche</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      La recherche
    </div>
  );
}

export default Search;
