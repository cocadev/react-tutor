import React, { Fragment, lazy } from 'react';

import { BRAND } from '../constants/general';
import { Title } from '../common';

const statementsPromise = import('../features/statements');

const Statements = lazy(() => statementsPromise);

const StatementsPage = () => (
  <Fragment>
    <Title description="" title={`Statements | ${BRAND.name}`} />
    <Statements />
  </Fragment>
);

export default StatementsPage;
