import React, { Fragment, lazy } from 'react';

import { BRAND } from '../constants/general';
import { Title } from '../common';

const microLessonsPromise = import('../features/micro-lessons');

const MicroLessons = lazy(() => microLessonsPromise);

const MicroLessonsPage = () => (
  <Fragment>
    <Title description="" title={`Micro Lessons | ${BRAND.name}`} />
    <MicroLessons />
  </Fragment>
);

export default MicroLessonsPage;
