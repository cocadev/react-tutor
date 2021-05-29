import { ServerError } from '@apollo/client/link/utils';
import { useCallback } from 'react';
import { NotificationManager } from 'react-notifications';
import client from '../../../gql/client';
import { useCache } from '../../../hooks';
import {
  Mutation,
  MutationSetPasswordArgs,
  MutationSignInArgs,
  MutationSignUpTutorArgs,
  MutationVerifyEmailArgs,
} from '../../../ts-types/users';
import { clearAuthData, saveToken } from '../../../utils/localStorage';
import { SetPasswordGQL, SignInUserGQL, SignUpTutorGQL, VerifyEmailGQL } from '../gql/mutations';

const getCreatePasswordError = (error?: { networkError?: ServerError }) =>
  error?.networkError?.result?.response?.message?.includes('The time for setting a new password has expired')
    ? 'The time for setting a new password has expired!'
    : 'Registration is failed! Please try again later';

const getSignInTextError = (error: { networkError?: ServerError }) =>
  error?.networkError?.result?.response?.message?.includes('The user is not activated')
    ? 'The user is not activated!'
    : 'Incorrect email or password!';

const getSignUpTextError = (error: { networkError?: ServerError }) =>
  error?.networkError?.result?.response?.message?.includes('E11000')
    ? 'Email is already taken!'
    : 'Registration is failed! Please try again later';

export default function useAuth() {
  const { onLoggedIn, onClearAuth, isLoggedIn } = useCache();

  const onLogout = useCallback(() => {
    onClearAuth();
    clearAuthData();
  }, [onClearAuth]);

  const onVerifyEmail = useCallback(async (variables: MutationVerifyEmailArgs, cb: (success?: boolean) => void) => {
    try {
      const res = await client.mutate<{ verifyEmail: Mutation['verifyEmail'] }>({
        mutation: VerifyEmailGQL,
        fetchPolicy: 'no-cache',
        variables,
      });
      if (res?.data?.verifyEmail) {
        cb(true);
        NotificationManager.success(`Email verified!`);
      } else {
        cb();
        NotificationManager.success('Email verification failed!');
      }
    } catch (e) {
      NotificationManager.error('Email verification failed!');
      cb();
    }
  }, []);

  const onCreatePassword = useCallback(
    async (variables: MutationSetPasswordArgs, cb: (success?: boolean) => void) => {
      const onError = (error?: { networkError?: ServerError }) => {
        NotificationManager.error(getCreatePasswordError(error));
        cb();
      };
      try {
        const response = await client.mutate<{ setPassword: Mutation['setPassword'] }>({
          mutation: SetPasswordGQL,
          fetchPolicy: 'no-cache',
          variables,
        });
        if (response?.data?.setPassword) {
          cb(true);
          saveToken(response.data.setPassword?.accessToken);
          onLoggedIn();
          NotificationManager.success(`Registration successful!`);
        } else {
          onError();
        }
      } catch (e) {
        onError(e);
      }
    },
    [onLoggedIn]
  );

  const onSignUp = useCallback(async (variables: MutationSignUpTutorArgs, cb: (success?: boolean) => void) => {
    try {
      await client.mutate<{ signUpTutor: Mutation['signUpTutor'] }>({
        mutation: SignUpTutorGQL,
        fetchPolicy: 'no-cache',
        variables,
      });
      cb(true);
      NotificationManager.success(`Please check your email - ${variables.signUpTutorInput.email}`);
    } catch (e) {
      NotificationManager.error(getSignUpTextError(e));
      cb();
    }
  }, []);

  const onSignIn = useCallback(
    async (variables: MutationSignInArgs, cb: (success?: boolean) => void) => {
      try {
        const response = await client.mutate<{ signIn: Mutation['signIn'] }>({
          mutation: SignInUserGQL,
          fetchPolicy: 'no-cache',
          variables,
        });
        if (response?.data?.signIn) {
          saveToken(response.data.signIn?.accessToken);
          onLoggedIn();
          cb(true);
        } else {
          NotificationManager.error('Incorrect email or password!');
          cb(false);
        }
      } catch (e) {
        NotificationManager.error(getSignInTextError(e));
        cb(false);
      }
    },
    [onLoggedIn]
  );

  return {
    isLoggedIn,
    onLogout,
    onSignIn,
    onSignUp,
    onCreatePassword,
    onVerifyEmail,
  };
}
