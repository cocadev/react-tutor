import React, { Fragment, lazy } from 'react';

import { BRAND } from '../constants/general';
import { Title } from '../common';

const verifyEmailPromise = import('../features/auth/components/verify-email');

const VerifyEmail = lazy(() => verifyEmailPromise);

const VerifyEmailPage = () => (
  <Fragment>
    <Title description="" title={`Verify email | ${BRAND.name}`} />
    <VerifyEmail />
  </Fragment>
);

export default VerifyEmailPage;
