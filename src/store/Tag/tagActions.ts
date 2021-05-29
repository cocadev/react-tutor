import * as actionTypes from './tagTypes';
import { GET_TAGS } from '../../gql/contents/queries/tags';
import { MutationUpdateTagsToMicroLesson, MutationUpdateTagsToQuestion } from '../../gql/contents/mutations/tags';
import _noop from 'lodash/fp/noop';

//get list of tags
export const getListTags = (client: any) => {
  return (dispatch: any) => {
    const query = GET_TAGS;
    client
      .query({
        query,
        fetchPolicy: 'no-cache',
      })
      .then((res: any) => {
        if (res.data.getTags) {
          dispatch({
            type: actionTypes.GET_ALL_TAGS,
            payload: res.data.getTags,
          });
        }
      })
      .catch(_noop);
  };
};

export const AddTagsToMicroLesson = (client: any, req: any, cb: any) => {
  return (dispatch: any) => {
    const mutation = MutationUpdateTagsToMicroLesson;
    const variables = { ...req };
    client
      .mutate({
        mutation,
        fetchPolicy: 'no-cache',
        variables,
      })
      .then((res: any) => {
        if (res) {
          dispatch({
            type: actionTypes.ADD_TAGS_TO_MICRO_LESSON,
          });
          cb(res.data.addTagsToMicroLesson);
        }
      })
      .catch((e: any) => {
        console.log(' - err -', e);
      });
  };
};

export const UpdateQuestionsTags = (client: any, req: any) => {
  return (dispatch: any) => {
    const mutation = MutationUpdateTagsToQuestion;
    const variables = { ...req };
    client
      .mutate({
        mutation,
        fetchPolicy: 'no-cache',
        variables,
      })
      .then((res: any) => {
        if (res) {
          dispatch({ type: actionTypes.UPDATE_QUESTIONS_TAGS });
        }
      })
      .catch((e: any) => {
        console.log(' - err -', e);
      });
  };
};
