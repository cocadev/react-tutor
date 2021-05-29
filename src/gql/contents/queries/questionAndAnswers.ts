import { gql } from '@apollo/client';

const GetAnswers = gql`
  query getAnswers($id: String!) {
    getAnswers(id: $id)
  }
`;

const QueryGetQuestion = gql`
  query getQuestion($id: String!) {
    getQuestion(id: $id) {
      _id
      created_at
      created_by
      last_updated_at
      last_updated_by
      deleted
      org_id
      metadata
      likes
      subscribers
      text
      parent_question_id
      micro_lesson_id
      type
      active
      allow_user_answer
      users_viewed
      answers
      tags {
        _id
        created_at
        created_by
        last_updated_at
        last_updated_by
        deleted
        org_id
        metadata
        likes
        subscribers
        text
        system_inferred
      }
    }
  }
`;

const GetQuestions = gql`
  query getQuestions {
    getQuestions {
      _id
      created_at
      created_by
      last_updated_at
      last_updated_by
      deleted
      org_id
      metadata
      likes
      subscribers
      text
      parent_question_id
      micro_lesson_id
      type
      active
      allow_user_answer
      users_viewed
      answers
      tags {
        _id
        created_at
        created_by
        last_updated_at
        last_updated_by
        deleted
        org_id
        metadata
        likes
        subscribers
        text
        system_inferred
      }
    }
  }
`;

export { GetAnswers, QueryGetQuestion, GetQuestions };
