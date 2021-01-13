import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderLayout from '../layouts/Header.layout';
import Home from '../views/Home';
import Search from '../views/Search';

import LayoutedRoute from './LayoutedRoute';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <LayoutedRoute
          path="/search"
          layout={HeaderLayout}
          component={Search}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
