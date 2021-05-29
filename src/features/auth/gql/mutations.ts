import { gql } from '@apollo/client';

export const SignInUserGQL = gql`
  mutation($signInInput: SignInInput!) {
    signIn(signInInput: $signInInput) {
      accessToken
    }
  }
`;

export const SignUpTutorGQL = gql`
  mutation($signUpTutorInput: SignUpTutorInput!) {
    signUpTutor(signUpTutorInput: $signUpTutorInput)
  }
`;

export const SetPasswordGQL = gql`
  mutation($setPasswordInput: SetPasswordInput!) {
    setPassword(setPasswordInput: $setPasswordInput) {
      accessToken
    }
  }
`;

export const VerifyEmailGQL = gql`
  mutation($encrypted_id: String!) {
    verifyEmail(encrypted_id: $encrypted_id)
  }
`;
