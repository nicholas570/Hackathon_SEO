import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Styles from '../../css/SignIn.module.css';
import AppButton from '../common/app-button/AppButton';
import AppInput from '../common/app-input/AppInput';

const SignIn = () => {
  const [state, setState] = useState({ email: '', password: '' });
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/login', state)
      .then(({ data }) => {
        localStorage.setItem('TOKEN', data.token);
        localStorage.setItem('USER', JSON.stringify(data.user));
        history.push('/annonces');
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

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
          <form className={Styles.signInForm} onSubmit={handleSubmit}>
            <h2 className={Styles.signInSecondTitle}>Connexion</h2>
            <AppInput
              name="email"
              label="adresse email :"
              placeholder="email@email.com"
              value={state.email}
              onChange={handleChange}
            />
            <AppInput
              name="password"
              label="mot de passe :"
              placeholder="********"
              value={state.password}
              onChange={handleChange}
            />
            <p className={Styles.signInForgot}>mot de passe oublié ?</p>
            <AppButton type="submit" title="Je me connecte" isSubmit />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;