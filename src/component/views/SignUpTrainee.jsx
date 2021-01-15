import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import AppButton from '../common/app-button/AppButton';
import AppInput from '../common/app-input/AppInput';

import Styles from '../../css/SignUp.module.css';

const SignUpTrainee = () => {
  const [state, setState] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
    password2: '',
  });
  const [cgu, setCgu] = useState(false);
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleCheck = (e) => {
    setCgu(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.password !== state.password2) {
      return alert('Les mots de passe ne matchent pas');
    }
    if (cgu) {
      axios
        .post('http://localhost:8080/register/user', state)
        .then(({ data }) => {
          localStorage.setItem('TOKEN', data.token);
          localStorage.setItem('USER', JSON.stringify(data.user));
          history.push('/annonces');
        })
        .catch((err) => {
          alert(err.response.data);
        });
    } else alert(`Merci d'accepter les CGU`);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Finis la galère, ici c'est toi qui achète ton stage! Inscris toi à Paye Ton stage et trouve l'entreprise qui te correspond: ESN, start up, éditeurs de logiciels, tech for good... Des centaines d'entreprises t'attendent"
        />
        <meta name="author" content="Les Stagiaires X Paye Ton Stage" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="canonical" href="http://mysite.com/example" />
        <title>Talent</title>
      </Helmet>
      <section className={Styles.signUp}>
        <div className={Styles.signUpBgImg}>
          <div className={Styles.signUpContent}>
            <div className={Styles.signUpHead}>
              <h1 className={Styles.signUpTitle}>Paye ton stage</h1>
              <p className={Styles.signUpDescription}>
                Un stage vaut mieux que deux tu l’auras.
              </p>
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
            <form className={Styles.signUpForm} onSubmit={handleSubmit}>
              <h2 className={Styles.signUpSecondTitle}>Inscription</h2>

              <AppInput
                name="prenom"
                label="Prénom :"
                placeholder="John"
                value={state.prenom}
                onChange={handleChange}
              />
              <AppInput
                name="nom"
                label="Nom :"
                placeholder="Doe"
                value={state.nom}
                onChange={handleChange}
              />
              <AppInput
                name="email"
                label="Adresse email :"
                placeholder="email@email.com"
                type="email"
                value={state.email}
                onChange={handleChange}
              />
              <AppInput
                name="password"
                label="mot de passe :"
                placeholder="********"
                type="password"
                value={state.password}
                onChange={handleChange}
              />
              <AppInput
                name="password2"
                label="mot de passe :"
                placeholder="********"
                type="password"
                value={state.password2}
                onChange={handleChange}
              />
              <div className={Styles.signUpCheck}>
                <input
                  className={Styles.signUpCheckox}
                  type="checkbox"
                  onClick={handleCheck}
                />
                <span>j&apos;accepte</span>
              </div>
              <AppButton title="Je me connecte" isSubmit />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpTrainee;
