import React, { Fragment, lazy } from 'react';

import { BRAND } from '../constants/general';
import { Title } from '../common';

const createCoursePromise = import('../features/courses/add-course');

const CreateCourse = lazy(() => createCoursePromise);

const CreateCoursePage = () => (
  <Fragment>
    <Title description="" title={`Create Course | ${BRAND.name}`} />
    <CreateCourse />
  </Fragment>
);

export default CreateCoursePage;
