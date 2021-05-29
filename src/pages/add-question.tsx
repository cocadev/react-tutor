import React, { Fragment, lazy } from 'react';

import { BRAND } from '../constants/general';
import { Title } from '../common';

const addQuestionPromise = import('../features/micro-lessons/add-question');

const AddQuestion = lazy(() => addQuestionPromise);

const AddQuestionPage = () => (
  <Fragment>
    <Title description="" title={`Add Question | ${BRAND.name}`} />
    <AddQuestion />
  </Fragment>
);

export default AddQuestionPage;
