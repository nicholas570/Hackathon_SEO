import React from 'react';
import { Helmet } from 'react-helmet';

function Shipping() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Le panier" />
        <meta name="author" content="Les Stagiaires X Paye Ton Stage" />
        <meta
          name="keywords"
          content="stage, alternance, dev, developpeur, tech, etudes"
        />
        <title>Panier</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      Le panier
    </div>
  );
}

export default Shipping;
