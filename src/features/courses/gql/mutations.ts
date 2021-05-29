import { gql } from '@apollo/client';

const CREATE_COURSE = gql`
  mutation createCourse($createCourseInput: CreateCourseInput!) {
    createCourse(createCourseInput: $createCourseInput) {
      description
      start_date
      end_date
      navigation
    }
  }
`;

const UPDATE_COURSE = gql`
  mutation updateCourse($updateCourseInput: UpdateCourseInput!) {
    updateCourse(updateCourseInput: $updateCourseInput) {
      id
      description
      start_date
      end_date
      navigation
    }
  }
`;

export { CREATE_COURSE, UPDATE_COURSE };
