import React, { Fragment, lazy } from 'react';

import { BRAND } from '../constants/general';
import { Title } from '../common';

const settingsPromise = import('../features/settings');

const Settings = lazy(() => settingsPromise);

const SettingsPage = () => (
  <Fragment>
    <Title description="" title={`Settings | ${BRAND.name}`} />
    <Settings />
  </Fragment>
);

export default SettingsPage;
