import { Nullable } from '../../../ts-types/base';
import { CourseModel } from '../../../ts-types/content';
import { CourseActions } from './actions';
import * as actionTypes from './types';

const initialState = {
  course: null as Nullable<CourseModel>,
  courses: [] as CourseModel[],
  loading: false,
  failed_course_load: false,
};

const reducer = (state = initialState, action: CourseActions) => {
  switch (action.type) {
    case actionTypes.SET_COURSE:
      return {
        ...state,
        course: action.data,
      };
    case actionTypes.GET_ALL_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_ALL_COURSES:
      return {
        ...state,
        loading: false,
        courses: action.payload,
        failed_course_load: false,
      };
    case actionTypes.GET_FAILED_COURSES:
      return {
        ...state,
        loading: false,
        failed_course_load: true,
      };
    default:
      return state;
  }
};

export default reducer;
