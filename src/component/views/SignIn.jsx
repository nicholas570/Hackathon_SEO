import React from 'react';
import { useHistory } from 'react-router-dom';

import Styles from '../../css/SignIn.module.css';
import AppButton from '../common/app-button/AppButton';
import AppInput from '../common/app-input/AppInput';

const SignIn = () => {
  const history = useHistory();

  return (
    <section className={Styles.signIn}>
      <div className={Styles.signInBgImg}>
        <div className={Styles.signInContent}>
          <div className={Styles.signInHead}>
            <h1 className={Styles.signInTitle}>Paye ton stage</h1>
            <p className={Styles.signInDescription}>Lorem lorem lorem</p>
          </div>
          <div className={Styles.signInGrpButton}>
            <AppButton
              title="Inscription stagiaire"
              onClick={() => history.push('/inscription-stagiaire')}
            />
            <AppButton
              title="Inscription entreprise"
              onClick={() => history.push('/inscription-entreprise')}
            />
          </div>
          <form className={Styles.signInForm}>
            <h2 className={Styles.signInSecondTitle}>Connexion</h2>
            <AppInput label="adresse email :" placeholder="email@email.com" />
            <AppInput label="mot de passe :" placeholder="********" />
            <p className={Styles.signInForgot}>mot de passe oublié ?</p>
            <AppButton
              title="Je me connecte"
              onClick={() => history.push('/annonces')}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
