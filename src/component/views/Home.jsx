import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="La home page" />
        <title>Inscription | Connection</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      La home
    </div>
  );
}

export default Home;
