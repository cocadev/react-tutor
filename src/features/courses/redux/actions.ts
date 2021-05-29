import { ApolloClient } from '@apollo/client';
import { Dispatch } from 'redux';
import { Nullable } from '../../../ts-types/base';
import { CourseModel, Query } from '../../../ts-types/content';
import * as actionTypes from './types';
import { GET_COURSES_QUERY } from '../gql/queries';

export const setCourse = (data: Nullable<CourseModel>) => {
  return {
    type: actionTypes.SET_COURSE,
    data,
  };
};

export const coursesGetRequest = () => ({ type: actionTypes.GET_ALL_COURSES_REQUEST });

const coursesGetFailed = (error: Error) => ({
  type: actionTypes.GET_FAILED_COURSES,
  payload: error,
});

// get list of courses Success
const coursesGetSuccess = (data: CourseModel[]) => ({
  type: actionTypes.GET_ALL_COURSES,
  payload: data,
});

//get list of courses
export const getListCourses = (client: ApolloClient<unknown>) => {
  return (dispatch: Dispatch) => {
    const query = GET_COURSES_QUERY;
    dispatch(coursesGetRequest());
    client
      .query<{ getCoursesCreatedByUser: Query['getCoursesCreatedByUser'] }>({
        query,
        fetchPolicy: 'no-cache',
      })
      .then(response => {
        if (response.data.getCoursesCreatedByUser) {
          dispatch(coursesGetSuccess(response.data.getCoursesCreatedByUser));
        }
      })
      .catch((e: Error) => {
        dispatch(coursesGetFailed(e));
      });
  };
};

export type CourseActions = ReturnType<
  typeof setCourse | typeof coursesGetRequest | typeof coursesGetSuccess | typeof coursesGetFailed
>;
