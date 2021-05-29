import { gql } from '@apollo/client';

const GetUserLikes = gql`
  query getUserLikes($user_id: String!) {
    getUserLikes(user_id: $user_id) {
      courses
      lessons
      microLessons
      questions
      tags
    }
  }
`;

const GetUserSubscriptions = gql`
  query getUserSubscriptions($user_id: String!) {
    getUserSubscriptions(user_id: $user_id) {
      courses
      lessons
      microLessons
      questions
      tags
    }
  }
`;

export { GetUserLikes, GetUserSubscriptions };
