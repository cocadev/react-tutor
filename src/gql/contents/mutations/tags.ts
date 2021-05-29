import { gql } from '@apollo/client';

const MutationAddTagsToMicroLesson = gql`
  mutation addTagsToMicroLesson($addTagsToMicroLessonInput: AddOrDeleteTagsInput!) {
    addTagsToMicroLesson(addTagsToMicroLessonInput: $addTagsToMicroLessonInput)
  }
`;

const MutationUpdateTagsToMicroLesson = gql`
  mutation updateMicroLessonsTags($updateMicroLessonsTagsInput: AddOrDeleteTagsInput!) {
    updateMicroLessonsTags(updateMicroLessonsTagsInput: $updateMicroLessonsTagsInput) {
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
`;

const MutationUpdateTagsToQuestion = gql`
  mutation updateQuestionsTags($updateQuestionsTagsInput: AddOrDeleteTagsInput!) {
    updateQuestionsTags(updateQuestionsTagsInput: $updateQuestionsTagsInput) {
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
`;

export { MutationAddTagsToMicroLesson, MutationUpdateTagsToMicroLesson, MutationUpdateTagsToQuestion };
