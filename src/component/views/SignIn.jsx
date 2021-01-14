import React from 'react';

import Styles from '../../css/SignIn.module.css';
import AppButton from '../common/app-button/AppButton';

const SignIn = () => {
  return (
    <section className={Styles.signIn}>
      <div className={Styles.signInBgImg}>
        <div className={Styles.signInContent}>
          <div className={Styles.signInHead}>
            <h1 className={Styles.signInTitle}>Paye ton stage</h1>
            <p className={Styles.signInDescription}>Lorem lorem lorem</p>
          </div>
          <form className={Styles.signInForm}>
            <h2>Connexion</h2>
            <AppButton title="Je me connecte" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
