import React, { Fragment, lazy } from 'react';

import { BRAND } from '../constants/general';
import { Title } from '../common';

const registerPromise = import('../features/auth/components/register');

const Register = lazy(() => registerPromise);

const RegisterPage = () => (
  <Fragment>
    <Title description="" title={`Register | ${BRAND.name}`} />
    <Register />
  </Fragment>
);

export default RegisterPage;
