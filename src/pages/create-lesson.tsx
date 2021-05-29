import React, { Fragment, lazy } from 'react';

import { BRAND } from '../constants/general';
import { Title } from '../common';

const createLessonPromise = import('../features/lessons/components/create-lesson');

const CreateLesson = lazy(() => createLessonPromise);

const CreateLessonPage = () => (
  <Fragment>
    <Title description="" title={`Create Lesson | ${BRAND.name}`} />
    <CreateLesson />
  </Fragment>
);

export default CreateLessonPage;
