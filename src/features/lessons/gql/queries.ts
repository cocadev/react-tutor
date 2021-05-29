import { gql } from '@apollo/client';

export const GET_LESSONS_QUERY = gql`
  query {
    getLessonsCreatedByUser {
      _id
      title
      description
      created_at
      last_updated_at
      micro_lessons {
        _id
        title
        content {
          data
        }
      }
      tags {
        _id
        text
      }
    }
  }
`;

export const GET_LESSON_QUERY = gql`
  query($id: String!) {
    getLesson(id: $id) {
      _id
      title
      description
      created_at
      last_updated_at
      micro_lessons {
        _id
      }
      tags {
        _id
        text
      }
    }
  }
`;
