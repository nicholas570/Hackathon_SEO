import React from 'react';

import style from './AnnoucementCard.module.css';
import announcementPropType from '../../prop-types/AnnouncementPropTypes';

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
          <h3 className={style.company}>{name}</h3>
          <h4 className={style.expert}>{expertise}</h4>
          <p className={style.location}>{localisation}</p>
        </div>
        <p className={style.price}>{prix}</p>
      </section>
    </div>
  );
};

export default AnnoucementCard;

AnnoucementCard.propTypes = announcementPropType;
