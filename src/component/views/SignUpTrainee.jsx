import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import AppButton from '../common/app-button/AppButton';
import AppInput from '../common/app-input/AppInput';

import Styles from '../../css/SignUp.module.css';

const SignUpTrainee = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    password2: '',
    nom: '',
    prenom: '',
  });
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <section className={Styles.signUp}>
      <div className={Styles.signUpBgImg}>
        <div className={Styles.signUpContent}>
          <div className={Styles.signUpHead}>
            <h1 className={Styles.signUpTitle}>Paye ton stage</h1>
            <p className={Styles.signUpDescription}>Lorem lorem lorem</p>
          </div>
          <div className={Styles.signUpGrpButton}>
            <AppButton
              title="Connexion"
              onClick={() => history.push('/connexion')}
            />
            <AppButton
              title="Inscription entreprise"
              onClick={() => history.push('/inscription-entreprise')}
            />
          </div>
          <form className={Styles.signUpForm}>
            <h2 className={Styles.signUpSecondTitle}>Inscription</h2>

            <AppInput name="prenom" label="Prénom :" placeholder="John" />
            <AppInput name="nom" label="Nom :" placeholder="Doe" />
            <AppInput
              name="email"
              label="Adresse email :"
              placeholder="email@email.com"
            />
            <AppInput
              name="password"
              label="mot de passe :"
              placeholder="********"
            />
            <AppInput
              name="password2"
              label="mot de passe :"
              placeholder="********"
            />
            <div className={Styles.signUpCheck}>
              <input className={Styles.signUpCheckox} type="checkbox" />
              <span>j&apos;accepte</span>
            </div>
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

export default SignUpTrainee;
