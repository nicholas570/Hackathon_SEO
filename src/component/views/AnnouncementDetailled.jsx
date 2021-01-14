import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

import styles from '../../css/AnnouncementDetail.module.css';
import doctobig from '../../Assets/Images/doctobig.png';
import { AnnonceContext } from '../../Context/AnnonceContext';

export default function AnnouncementDetailled(announcement) {
  const { annonce, setAnnonce } = useContext(AnnonceContext);
  const [annoucement, setAnnoucement] = useState([]);

  const handleAnnonces = () => {
    setAnnonce([...annonce, annoucement]);
  };

  useEffect(() => {
    console.log('ok');
    axios
      .get(`${process.env.REACT_APP_SERVER}/annonces/1`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
          'Access-Control-Allow-Origin': process.env.REACT_APP_SERVER,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setAnnoucement(data.annonce);
      })
      .catch((err) => {
        let message;
        if (err.response.status === 401) {
          message = "You're not authorized to access these datas";
        } else {
          message = err.response.data.errorMessage;
        }
        alert(message);
        console.error(err);
      });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Vous trouverez ici une annonce détaillée vous permettant d'avoir accès aux informations du stage ou alternance proposé: Entreprise, lieux, durée, début, langage, spécialité."
        />
        <meta name="author" content="Les Stagiaires X Paye Ton Stage" />
        <meta
          name="keywords"
          content="stage, alternance, dev, developpeur, tech, etudes, entreprise, technologie, langage, front-end, back-end, full-stack"
        />
        <title>Annonce Détaillée</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className={styles.annonceDetailContainer}>
        <div>
          <picture>
            <source
              srcSet={annoucement.logo_small}
              media="(max-width: 768px)"
            />
            <img
              src={annoucement.logo}
              alt={annoucement.name}
              className={styles.annonceDetailLogo}
            />
          </picture>

          <div className={styles.annonceDetailInfo}>
            <div className={styles.annonceDetailEnt}>
              <h3>{annoucement.nom}</h3>
              <p>{annoucement.expertise}</p>
              <p>{annoucement.langage}</p>
            </div>
            <div className={styles.annonceDetailStage}>
              <p>{annoucement.localisation}</p>
              <p>{annoucement.duree}</p>
              <p className={styles.annonceDetailDebut}>{annoucement.debut}</p>
            </div>
          </div>
          <div className={styles.annonceDetailDesription}>
            <h3 className={styles.annonceDetailDesriptionTitle}>Description</h3>
            <p className={styles.annonceDetailText}>
              {annoucement.description}
            </p>
          </div>
          <div className={styles.annonceDetailPrixContener}>
            <button
              className={styles.annonceDetailPrix}
              type="button"
              onClick={() => handleAnnonces()}
            >
              {annoucement.prix}
            </button>
            <FontAwesomeIcon
              className={styles.annonceDetailCart}
              icon={faShoppingCart}
            />
          </div>
        </div>
      </div>
    </>
  );
}
