import React, { Fragment, lazy } from 'react';

import { BRAND } from '../constants/general';
import { Title } from '../common';

const microDetailPromise = import('../features/micro-lessons/micro-detail');

const MicroDetail = lazy(() => microDetailPromise);

const MicroDetailPage = () => (
  <Fragment>
    <Title description="" title={`Micro lesson details | ${BRAND.name}`} />
    <MicroDetail />
  </Fragment>
);

export default MicroDetailPage;
