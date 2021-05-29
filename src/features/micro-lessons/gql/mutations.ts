import { gql } from '@apollo/client';

const MutationCreateMicroLesson = gql`
  mutation($createMicroLesson: CreateMicroLessonInput!) {
    createMicroLesson(createMicroLesson: $createMicroLesson) {
      _id
      created_at
      last_updated_at
      title
      is_published
      content {
        description
        data
        type
      }
      tags {
        _id
        text
      }
      questions {
        _id
      }
    }
  }
`;

const MutationUpdateMicroLesson = gql`
  mutation($updateMicroLessonInput: UpdateMicroLessonInput!) {
    updateMicroLesson(updateMicroLessonInput: $updateMicroLessonInput) {
      _id
      created_at
      last_updated_at
      title
      content {
        description
        data
        type
      }
      is_published
      tags {
        _id
      }
      questions {
        _id
      }
    }
  }
`;

const DeleteMicroLesson = gql`
  mutation($id: String!) {
    deleteMicroLesson(id: $id)
  }
`;

const MutationCreateQuestion = gql`
  mutation createQuestion($createQuestionInput: CreateQuestionInput!) {
    createQuestion(createQuestionInput: $createQuestionInput) {
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
      micro_lesson_id
      type
      active
      users_viewed
      answers {
        text
        id
        image_url
        weight
        original
        active
        metadata
      }
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

const MutationCreateAnswer = gql`
  mutation createAnswer($createAnswerInput: CreateAnswerInput!) {
    createAnswer(createAnswerInput: $createAnswerInput) {
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
      micro_lesson_id
      type
      active
      users_viewed
      answers {
        text
        id
        image_url
        weight
        original
        active
        metadata
      }
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

const MutationUpdateQuestion = gql`
  mutation updateQuestion($updateQuestionInput: UpdateQuestionInput!) {
    updateQuestion(updateQuestionInput: $updateQuestionInput) {
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
      micro_lesson_id
      type
      active
      users_viewed
      answers {
        text
        id
        image_url
        weight
        original
        active
        metadata
      }
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

const MutationUpdateAnswer = gql`
  mutation updateAnswer($updateAnswerInput: UpdateAnswerInput!) {
    updateAnswer(updateAnswerInput: $updateAnswerInput) {
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
      micro_lesson_id
      type
      active
      users_viewed
      answers {
        text
        id
        image_url
        weight
        original
        active
        metadata
      }
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

const MutationRemoveAnswer = gql`
  mutation deleteAnswer($deleteAnswerInput: DeleteAnswerInput!) {
    deleteAnswer(deleteAnswerInput: $deleteAnswerInput) {
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
      micro_lesson_id
      type
      active
      users_viewed
      answers {
        text
        id
        image_url
        weight
        original
        active
        metadata
        is_correct
      }
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

export {
  MutationCreateMicroLesson,
  MutationUpdateMicroLesson,
  DeleteMicroLesson,
  MutationCreateQuestion,
  MutationCreateAnswer,
  MutationUpdateQuestion,
  MutationUpdateAnswer,
  MutationRemoveAnswer,
};
