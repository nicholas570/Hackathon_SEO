import React from 'react';

import Styles from '../../css/SignIn.module.css';
import AppButton from '../common/app-button/AppButton';
import AppInput from '../common/app-input/AppInput';

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
            <h2 className={Styles.signInSecondTitle}>Connexion</h2>
            <br />
            <AppInput label="adresse email :" placeholder="email@email.com" />
            <AppInput label="mot de passe :" placeholder="********" />
            <p className={Styles.signInForgot}>mot de passe oublié ?</p>
            <br />
            <AppButton title="Je me connecte" />
            <br />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
