import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import { Buttons } from '../../../common';

import { useAuth } from '../../../hooks';
import AuthTextField from './auth-text-field';
import { useStyles } from './styles';

const Register = () => {
  const classes = useStyles();
  const { onSignUp } = useAuth();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const onSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      await onSignUp({ signUpTutorInput: { email } }, success => {
        setLoading(false);
        if (success) {
          setEmail('');
        }
      });
    },
    [setLoading, setEmail, onSignUp, email]
  );

  const isDisabled = useMemo(() => !isEmail(email), [email]);

  return (
    <Grid className={classes.container}>
      <form className={classes.form} onSubmit={onSubmit}>
        <Typography className={classes.title}>WELCOME</Typography>
        <Typography className={classes.description}>SignUp New Account</Typography>
        <AuthTextField autoFocus type="email" name="email" value={email} placeholder={'Email'} onChange={handleEmail} />
        <Buttons.Auth title="Register" loading={loading} disabled={isDisabled} />
        <Typography align="center">
          Already have an account? <br />
          Please
          <Link to={'/login'}>
            <span className={classes.signUpText}>Sign In</span>
          </Link>
          here
        </Typography>
      </form>
    </Grid>
  );
};

export default Register;
