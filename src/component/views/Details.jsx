import React from 'react';
import { Helmet } from 'react-helmet';

function Details() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="La page de details" />
        <meta name="author" content="Les Stagiaires X Paye Ton Stage" />
        <meta
          name="keywords"
          content="stage, alternance, dev, developpeur, tech, etudes"
        />
        <title>Détails</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      Les détails
    </div>
  );
}

export default Details;
