import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import qs from 'query-string';
import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { useAuth } from '../../../hooks';
import { useStyles } from './styles';

const VerifyEmail = () => {
  const classes = useStyles();
  const {
    replace,
    location: { search },
  } = useHistory();
  const { onVerifyEmail } = useAuth();

  const onRedirect = useCallback(
    (userHash?: string, success?: boolean) =>
      replace(success && userHash ? `${ROUTES.createPassword}?user=${userHash}` : ROUTES.register),
    [replace]
  );

  useEffect(() => {
    const parsedSearch = qs.parse(search) as { user: string };
    onVerifyEmail(
      {
        encrypted_id: parsedSearch?.user,
      },
      success => onRedirect(parsedSearch?.user, success)
    );
  }, [onVerifyEmail, onRedirect, search]);

  return (
    <Grid className={classes.container}>
      <Grid className={classes.verification}>
        <Typography variant="h4" component="h1">
          Verifying...
        </Typography>
      </Grid>
    </Grid>
  );
};

export default VerifyEmail;
