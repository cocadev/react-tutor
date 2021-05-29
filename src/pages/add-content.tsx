import React, { Fragment, lazy } from 'react';

import { BRAND } from '../constants/general';
import { Title } from '../common';

const addContentPromise = import('../features/micro-lessons/add-content');

const AddContent = lazy(() => addContentPromise);

const AddContentPage = () => (
  <Fragment>
    <Title description="" title={`Add Content | ${BRAND.name}`} />
    <AddContent />
  </Fragment>
);

export default AddContentPage;
