import React from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';

import { ROUTES } from '../constants/routes';
import { useAuth } from '../hooks';

const PrivateRoute: React.FC<RouteProps> = ({ component: Component, render, ...rest }) => {
  const { isLoggedIn } = useAuth();

  const renderComponent = (props: RouteComponentProps) => {
    if (isLoggedIn) {
      return Component ? <Component {...props} /> : null;
    } else {
      return <Redirect to={{ pathname: ROUTES.login, state: { from: props.location } }} />;
    }
  };

  return <Route {...rest} render={render || renderComponent} />;
};

export default PrivateRoute;
