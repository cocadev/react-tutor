import React from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';

import { ROUTES } from '../constants/routes';
import { useAuth } from '../hooks';

const PublicRoute: React.FC<RouteProps> = ({ component: Component, render, ...rest }) => {
  const { isLoggedIn } = useAuth();

  const renderComponent = (props: RouteComponentProps) => {
    if (!isLoggedIn) {
      return Component ? <Component {...props} /> : null;
    } else {
      return <Redirect to={ROUTES.main} />;
    }
  };

  return <Route {...rest} render={render || renderComponent} />;
};

export default PublicRoute;
