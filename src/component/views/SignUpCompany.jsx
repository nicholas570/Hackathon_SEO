import React from 'react';

import AppButton from '../common/app-button/AppButton';
import AppInput from '../common/app-input/AppInput';

import Styles from '../../css/SignUp.module.css';

const SignUpCompany = () => {
  return (
    <section className={Styles.signUp}>
      <div className={Styles.signUpBgImg}>
        <div className={Styles.signUpContent}>
          <div className={Styles.signUpHead}>
            <h1 className={Styles.signUpTitle}>Paye ton stage</h1>
            <p className={Styles.signUpDescription}>Lorem lorem lorem</p>
          </div>
          <form className={Styles.signUpForm}>
            <h2 className={Styles.signUpSecondTitle}>Inscription</h2>

            <AppInput label="Nom :" placeholder="société" />
            <AppInput label="Adresse :" placeholder="10 rue du stage" />
            <AppInput label="Adresse email :" placeholder="email@email.com" />
            <AppInput label="Téléphone :" placeholder="07 00 00 00 00" />
            <AppInput label="domaine :" placeholder="technologie" />
            <AppInput label="mot de passe :" placeholder="********" />
            <AppInput label="mot de passe :" placeholder="********" />
            <div className={Styles.signUpCheck}>
              <input className={Styles.signUpCheckox} type="checkbox" />
              <span>j&apos;accepte</span>
            </div>
            <AppButton title="Je me connecte" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpCompany;
