import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="La home page" />
        <meta name="author" content="Les Stagiaires X Paye Ton Stage" />
        <meta
          name="keywords"
          content="stage, alternance, dev, developpeur, tech, etudes"
        />
        <title>Inscription | Connection</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      La home
    </div>
  );
}

export default Home;
