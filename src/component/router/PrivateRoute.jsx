import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function LayoutedRoute({ layout: Layout, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
}

LayoutedRoute.propTypes = {
  layout: PropTypes.func.isRequired,
  component: PropTypes.func.isRequired,
};

export default LayoutedRoute;
