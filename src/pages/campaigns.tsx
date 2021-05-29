import React, { Fragment, lazy } from 'react';

import { BRAND } from '../constants/general';
import { Title } from '../common';

const campaignsPromise = import('../features/campaigns');

const Campaigns = lazy(() => campaignsPromise);

const CampaignsPage = () => (
  <Fragment>
    <Title description="" title={`Campaigns | ${BRAND.name}`} />
    <Campaigns />
  </Fragment>
);

export default CampaignsPage;
