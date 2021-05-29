import React, { Fragment, lazy } from 'react';

import { BRAND } from '../constants/general';
import { Title } from '../common';

const lessonsPromise = import('../features/lessons');

const Lessons = lazy(() => lessonsPromise);

const LessonsPage = () => (
  <Fragment>
    <Title description="" title={`Lessons | ${BRAND.name}`} />
    <Lessons />
  </Fragment>
);

export default LessonsPage;
