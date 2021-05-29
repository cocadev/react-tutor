import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';

import { Buttons } from '../../../common';
import { useAuth } from '../../../hooks';
import AuthTextField from './auth-text-field';
import { useStyles } from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { onSignIn } = useAuth();

  const onSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      await onSignIn(
        {
          signInInput: {
            email,
            password,
          },
        },
        () => {
          setLoading(false);
        }
      );
    },
    [onSignIn, setLoading, email, password]
  );

  const disabled = useMemo(() => !isEmail(email) || !password, [password, email]);
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <form className={classes.form} onSubmit={onSubmit}>
        <Typography className={classes.title}>WELCOME</Typography>
        <Typography className={classes.description}>Login to Your Account</Typography>
        <AuthTextField
          autoFocus
          autoComplete="email"
          type="email"
          name="email"
          value={email}
          placeholder={'Email'}
          onChange={e => setEmail(e.target.value)}
        />
        <AuthTextField
          autoComplete="current-password"
          type="password"
          name="password"
          placeholder={'Password'}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Buttons.Auth title="Login" loading={loading} disabled={disabled} />
        <Typography align="center">
          Don&apos;t you have an account? <br />
          Please go to
          <Link to={'/register'}>
            <span className={classes.signUpText}>Sign Up</span>
          </Link>
          here
        </Typography>
      </form>
    </Grid>
  );
};

export default Login;
