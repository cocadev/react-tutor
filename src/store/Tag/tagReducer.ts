import { TagModel } from '../../ts-types/content';
import * as actionTypes from './tagTypes';

const initialState = {
  isTagsLoaded: false,
  tagsList: [] as TagModel[],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_ALL_TAGS:
      return {
        ...state,
        tagsList: action.payload,
        isTagsLoaded: true,
      };
    case actionTypes.ADD_TAGS_TO_MICRO_LESSON:
    case actionTypes.UPDATE_QUESTIONS_TAGS:
      return {
        ...state,
        isTagsLoaded: false,
      };
    default:
      return state;
  }
};

export default reducer;
