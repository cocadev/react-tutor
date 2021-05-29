import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import qs from 'query-string';
import React, { useCallback, useMemo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Buttons } from '../../../common';
import { useAuth } from '../../../hooks';

import AuthTextField from './auth-text-field';
import { useStyles } from './styles';

type State = {
  password: string;
  confirmPassword: string;
};

const INITIAL_STATE: State = {
  password: '',
  confirmPassword: '',
};

const CreatePassword = () => {
  const [state, setState] = useState<State>(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const { onCreatePassword } = useAuth();
  const classes = useStyles();
  const handleState = (type: keyof State) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setState({
      ...state,
      [type]: e.target.value,
    });

  const {
    location: { search },
  } = useHistory();
  const isInvalidPassword = useMemo(
    () => !!state.password && !state.password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])\S{8,}$/),
    [state.password]
  );

  const disabled = useMemo(
    () => isInvalidPassword || !state.password || !state.confirmPassword || state.confirmPassword !== state.password,
    [state, isInvalidPassword]
  );

  const onSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      await onCreatePassword(
        {
          setPasswordInput: {
            password: state.password,
            encrypted_id: (qs.parse(search) as { user: string })?.user,
          },
        },
        () => {
          setLoading(false);
        }
      );
    },
    [onCreatePassword, setLoading, search, state]
  );

  return (
    <Grid className={classes.container}>
      <form className={classes.form} onSubmit={onSubmit}>
        <Typography className={classes.title}>WELCOME</Typography>
        <Typography className={classes.description}>Create password</Typography>
        <Typography className={classes.passwordNotification}>
          Password should contain at least 8 characters, 1 digit, 1 uppercase and 1 lowercase letter.
        </Typography>
        <AuthTextField
          autoComplete="new-password"
          type="password"
          name="password"
          placeholder={'Password'}
          value={state.password}
          error={isInvalidPassword}
          helperText={isInvalidPassword && 'Password is not valid'}
          onChange={handleState('password')}
        />
        <AuthTextField
          autoComplete="new-password"
          type="password"
          name="confirmPassword"
          placeholder={'Confirm password'}
          value={state.confirmPassword}
          onChange={handleState('confirmPassword')}
        />
        <Buttons.Auth loading={loading} title="Confirm" disabled={disabled} />
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

export default CreatePassword;
