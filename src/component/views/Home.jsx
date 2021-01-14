import React from 'react';
import { Helmet } from 'react-helmet';

import Styles from '../../css/Home.module.css';
import AppButton from '../common/app-button/AppButton';

function Home() {
  return (
    <section className={Styles.home}>
      <div className={Styles.homeBgImg}>
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

        <div className={Styles.homeContent}>
          <h1 className={Styles.homeTitle}>Paye ton stage</h1>
          <p className={Styles.homeDescription}>Lorem lorem lorem</p>
          <AppButton title="Inscription stagiaire" />
          <AppButton title="Inscription entreprise" />
          <AppButton title="Connexion" />
        </div>
      </div>
    </section>
  );
}

export default Home;
