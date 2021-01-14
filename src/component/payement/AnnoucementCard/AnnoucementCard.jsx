import React from 'react';

import style from './AnnoucementCard.module.css';

const AnnoucementCard = ({
  logo_small,
  name,
  localisation,
  expertise,
  prix,
}) => {
  return (
    <div className={style.CardLayout}>
      <img src={logo_small} alt={`logo ${name}`} />
      <section className={style.descriptionCard}>
        <div className={style.decriptionCard}>
          <h3>{name}</h3>
          <h4>{expertise}</h4>
          <p>{localisation}</p>
        </div>
        <p className={style.price}>{prix}</p>
      </section>
    </div>
  );
};

export default AnnoucementCard;
