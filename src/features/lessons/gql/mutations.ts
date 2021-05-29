import { gql } from '@apollo/client';

export const CREATE_LESSON = gql`
  mutation($createLessonInput: CreateLessonInput!) {
    createLesson(createLessonInput: $createLessonInput) {
      _id
      title
      description
      goal
    }
  }
`;

export const UPDATE_LESSON = gql`
  mutation($updateLessonInput: UpdateLessonInput!) {
    updateLesson(updateLessonInput: $updateLessonInput) {
      _id
      title
      description
      goal
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

export const UPDATE_MICRO_LESSONS_IN_LESSON = gql`
  mutation($updateMicroLessonsInLessonInput: UpdateMicroLessonsInLessonInput!) {
    updateMicroLessonsInLesson(updateMicroLessonsInLessonInput: $updateMicroLessonsInLessonInput) {
      _id
      title
      description
      goal
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

export const ADD_TAGS_TO_LESSON = gql`
  mutation($addTagsToLessonInput: AddOrDeleteTagsInput!) {
    addTagsToLesson(addTagsToLessonInput: $addTagsToLessonInput) {
      _id
    }
  }
`;

export const UPDATE_LESSON_TAGS = gql`
  mutation($updateLessonsTagsInput: AddOrDeleteTagsInput!) {
    updateLessonsTags(updateLessonsTagsInput: $updateLessonsTagsInput) {
      _id
      text
    }
  }
`;
