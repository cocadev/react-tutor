import React, { Fragment, lazy } from 'react';

import { BRAND } from '../constants/general';
import { Title } from '../common';

const updateLessonPromise = import('../features/lessons/update');

const UpdateLesson = lazy(() => updateLessonPromise);

const UpdateLessonPage = () => (
  <Fragment>
    <Title description="" title={`Update Lesson | ${BRAND.name}`} />
    <UpdateLesson />
  </Fragment>
);

export default UpdateLessonPage;
