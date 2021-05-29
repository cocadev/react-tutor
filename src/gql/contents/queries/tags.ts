import { gql } from '@apollo/client';

const GET_TAGS = gql`
  query {
    getTags {
      _id
      text
    }
  }
`;

export { GET_TAGS };
