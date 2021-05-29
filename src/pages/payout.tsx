import React, { Fragment, lazy } from 'react';

import { BRAND } from '../constants/general';
import { Title } from '../common';

const payoutPromise = import('../features/payout');

const Payout = lazy(() => payoutPromise);

const PayoutPage = () => (
  <Fragment>
    <Title description="" title={`Payout | ${BRAND.name}`} />
    <Payout />
  </Fragment>
);

export default PayoutPage;
