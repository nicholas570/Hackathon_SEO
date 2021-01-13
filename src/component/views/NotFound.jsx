import React from 'react';
import { Helmet } from 'react-helmet';

import imprimante from '../../Assets/Logo/imprimante.svg';
import cafe from '../../Assets/Logo/café.svg';

import style from '../../css/NotFound.module.css';

function NotFound() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="404 Not Found" />
        <meta name="author" content="Les Stagiaires X Paye Ton Stage" />
        <meta
          name="keywords"
          content="stage, alternance, dev, developpeur, tech, etudes"
        />
        <title>Oups...</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section className={style.container}>
        <img
          src="https://i.imgflip.com/4tq6r9.jpg"
          title="made at imgflip.com"
          alt="Yoda envoyant une 404"
          className={style.yoda}
        />
      </section>
    </>
  );
}

export default NotFound;
