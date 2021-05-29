import React, { Fragment, lazy } from 'react';

import { BRAND } from '../constants/general';
import { Title } from '../common';

const coursesPromise = import('../features/courses');

const Courses = lazy(() => coursesPromise);

const CoursesPage = () => (
  <Fragment>
    <Title description="" title={`Courses | ${BRAND.name}`} />
    <Courses />
  </Fragment>
);

export default CoursesPage;
