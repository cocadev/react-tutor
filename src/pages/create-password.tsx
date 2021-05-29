import React, { Fragment, lazy } from 'react';

import { BRAND } from '../constants/general';
import { Title } from '../common';

const createPasswordPromise = import('../features/auth/components/create-password');

const CreatePassword = lazy(() => createPasswordPromise);

const CreatePasswordPage = () => (
  <Fragment>
    <Title description="" title={`Create password | ${BRAND.name}`} />
    <CreatePassword />
  </Fragment>
);

export default CreatePasswordPage;
