import React, { Fragment, lazy } from 'react';

import { BRAND } from '../constants/general';
import { Title } from '../common';

const overviewPromise = import('../features/overview');

const Overview = lazy(() => overviewPromise);

const OverviewPage = () => (
  <Fragment>
    <Title description="" title={`Overview | ${BRAND.name}`} />
    <Overview />
  </Fragment>
);

export default OverviewPage;
