import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

import styles from '../../css/AnnouncementDetail.module.css';
import doctolib from '../../Assets/Images/doctolib.png';
import doctobig from '../../Assets/Images/doctobig.png';
import { AnnoncesContext } from '../../Context/AnnoncesContext';

export default function AnnouncementDetailled({ announcement }) {
  const { annonces, setAnnonces } = useContext(AnnoncesContext);
  const handleAnnonces = () => {
    setAnnonces([annonces]);
  };
  const [annoucement, setAnnoucement] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/annonces`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
          'Access-Control-Allow-Origin': process.env.REACT_APP_SERVER,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setAnnoucement(data);
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
      <div className={styles.annoucementDetailContainer}>
        <div>
          <picture>
            <source srcSet={doctolib} media="(max-width: 768px)" />
            <img
              src={doctobig}
              alt={announcement.name}
              className={styles.annonceDetailLogo}
            />
          </picture>

          <div className={styles.annonceDetailInfo}>
            <div className={styles.annonceDetailEnt}>
              <h3>{announcement.name}</h3>
              <p>{announcement.expertise}</p>
              <p>{announcement.langage}</p>
            </div>
            <div className={styles.annonceDetailStage}>
              <p>{announcement.localisation}</p>
              <p>{announcement.duree}</p>
              <p className={styles.annonceDetailDebut}>{announcement.debut}</p>
            </div>
          </div>
          <div className={styles.annonceDetailDesription}>
            <h3 className={styles.annonceDetailDesriptionTitle}>Description</h3>
            <p className={styles.annonceDetailText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              maxime neque, laboriosam magnam assumenda fugit aliquid minus
              asperiores doloremque dolorem alias nihil provident. Quos,
              similique neque. Eius mollitia dolores tenetur. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Placeat, sed enim tempore
              eum sunt perspiciatis saepe voluptas dicta similique ducimus
              necessitatibus itaque suscipit harum impedit quas delectus,
              repudiandae fugit ab.
            </p>
          </div>
          <div className={styles.annonceDetailPrixContener}>
            <button
              className={styles.annonceDetailPrix}
              type="button"
              onClick={() => handleAnnonces()}
            >
              {announcement.prix}
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
