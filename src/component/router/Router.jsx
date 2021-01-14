import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderLayout from '../layouts/Header.layout';
import DetailsLayout from '../layouts/Details.layout';
import Home from '../views/Home';
import Search from '../views/Search';

import PrivateRoute from './PrivateRoute';
import Details from '../views/Details';
import Shipping from '../views/Shipping';
import NotFound from '../views/NotFound';
import SignIn from '../views/SignIn';
import SignUpTrainee from '../views/SignUpTrainee';
import SignUpCompany from '../views/SignUpCompany';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Connexion" component={SignIn} />
        <Route exact path="/inscription-stagiaire" component={SignUpTrainee} />
        <Route exact path="/inscription-entreprise" component={SignUpCompany} />
        <PrivateRoute
          exact
          path="/annonces"
          layout={HeaderLayout}
          component={Search}
        />
        <PrivateRoute
          path="/panier"
          layout={DetailsLayout}
          component={Shipping}
        />
        <PrivateRoute
          path="/annonces/:slug"
          layout={DetailsLayout}
          component={Details}
        />
        <PrivateRoute
          exact
          path="*"
          layout={DetailsLayout}
          component={NotFound}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
