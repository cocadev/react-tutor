import { Nullable } from '../../../ts-types/base';
import { MicroLessonModel } from '../../../ts-types/content';
import { MicroLessonActions } from './actions';
import * as actionTypes from './types';

const initialState = {
  loading: true,
  isMLLoaded: false,
  microLessons: [] as MicroLessonModel[],
  error: null as Nullable<Error>,
};

const reducer = (state = initialState, action: MicroLessonActions) => {
  switch (action.type) {
    case actionTypes.CREATE_MICROLESSON_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.CREATE_MICROLESSON_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.SET_CONTENT_SUCCESS:
      return {
        ...state,
        isMLLoaded: false,
      };

    case actionTypes.SET_MICROLESSON:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.GET_ALL_MICROLESSONS:
      return {
        ...state,
        loading: false,
        error: null,
        isMLLoaded: true,
        microLessons: action.payload,
      };
    case actionTypes.GET_ALL_MICROLESSONS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionTypes.REMOVE_MICROLESSON:
      return {
        ...state,
        microLessons: [...state.microLessons.filter(item => item._id !== action.payload)],
      };

    case actionTypes.CREATE_MICROLESSON:
      return {
        ...state,
        loading: false,
        microLessons: [...state.microLessons, action.payload],
      };

    case actionTypes.UPDATE_MICROLESSON:
      return {
        ...state,
        microLessons: [...state.microLessons.filter(item => item._id !== action.payload._id), action.payload],
      };

    case actionTypes.UPDATE_TAGS_FOR_MICROLESSON:
      return {
        ...state,
      };

    case actionTypes.PUT_QUESTION_FOR_MICROLESSON:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
