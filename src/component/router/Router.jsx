import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderLayout from '../layouts/Header.layout';
import DetailsLayout from '../layouts/Details.layout';
import Home from '../views/Home';
import Search from '../views/Search';

import PrivateRoute from './PrivateRoute';
import Details from '../views/Details';
import Shipping from '../views/Shipping';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
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
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
