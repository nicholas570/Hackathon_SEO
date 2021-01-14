import React from 'react';
import { Helmet } from 'react-helmet';

import AnnoucementCard from '../payement/AnnoucementCard/AnnoucementCard';
import Payement from '../common/Payment/Payement';

import linkedinSmall from '../../Assets/Images/linkedin-small.png';
import styles from '../../css/Shipping.module.css';
import cardPayement from '../../Assets/Logo/creditcard.svg';
import cpf from '../../Assets/Logo/cpf.png';
import paypal from '../../Assets/Logo/pp.png';

function Shipping() {
  return (
    <div className={styles.ContainerShipping}>
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
      <section>
        <h2 className={styles.titleShipping}>Mon panier</h2>
        <div className={styles.ShippingCard}>
          <h3 className={styles.titleAchat}>
            Mes achats
            <span className={styles.numberAnnounceBasket}>(1)</span>
          </h3>
          <AnnoucementCard
            logo_small={linkedinSmall}
            name="Linkedin"
            localisation="Nantes"
            expertise="Full Stack"
            prix="250€"
          />
          <p className={styles.descritionPrice}>
            Montant à payer:
            <span className={styles.descritionPriceSpan}>250€</span>
          </p>
          <section className={styles.wrapperAllPayement}>
            <Payement
              href="https://www.creditmutuel.fr/home/index.html"
              icon={cardPayement}
              alt="payement carte de crédit"
            />
            <Payement
              href="https://www.paypal.com/fr/webapps/mpp/home"
              icon={paypal}
              alt="payement paypal"
            />
            <Payement
              href="https://www.mon-compte-formation.fr/sea?msclkid=ef972b6cdc5d1b63486f4b6cf5944043&utm_source=bing&utm_medium=cpc&utm_campaign=MCF-SN%2FCPF&utm_term=liste%20des%20formations%20%C3%A9ligibles%20cpf&utm_content=DIF%2FCPF%20-%20Formation%20(all)"
              icon={cpf}
              alt="payement cpf"
            />
          </section>
        </div>
      </section>
    </div>
  );
}

export default Shipping;
