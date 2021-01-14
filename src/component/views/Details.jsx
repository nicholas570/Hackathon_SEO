import React from 'react';
import { Helmet } from 'react-helmet';

function Details() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Selectionne une annonce pour avoir plus d'informations et contacter l'entreprise"
        />
        <meta name="author" content="Les Stagiaires X Paye Ton Stage" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="canonical" href="http://mysite.com/example" />
        <title>Détails</title>
      </Helmet>
      Les détails
    </div>
  );
}

export default Details;
