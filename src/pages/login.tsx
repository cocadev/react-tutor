import React, { Fragment, lazy } from 'react';

import { BRAND } from '../constants/general';
import { Title } from '../common';

const loginPromise = import('../features/auth/components/login');

const Login = lazy(() => loginPromise);

const LoginPage = () => (
  <Fragment>
    <Title description="" title={`Log in | ${BRAND.name}`} />
    <Login />
  </Fragment>
);

export default LoginPage;
