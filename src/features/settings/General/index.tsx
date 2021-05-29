import React from 'react';
import { Grid } from '@material-ui/core';
import ProfileDetails from './ProfileDetails';
import GeneralSettings from './GeneralSettings';

const user = {
  avatar: '',
  firstName: '',
  lastName: '',
  state: '',
  country: '',
  timezone: '',
  canHire: false,
  email: '',
  isPublic: false,
  phone: '',
};

export type SettingsMockedUser = typeof user;

function General() {
  // const { user } = useSelector((state) => state.account);

  return (
    <Grid container spacing={3}>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <ProfileDetails user={user} />
      </Grid>
      <Grid item lg={8} md={6} xl={9} xs={12}>
        <GeneralSettings user={user} />
      </Grid>
    </Grid>
  );
}

export default General;
