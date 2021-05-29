import { ApolloClient } from '@apollo/client';
import {
  DeleteMicroLesson,
  MutationCreateMicroLesson,
  MutationUpdateMicroLesson,
  MutationCreateQuestion,
  MutationCreateAnswer,
  MutationUpdateQuestion,
  MutationUpdateAnswer,
  MutationRemoveAnswer,
} from '../gql/mutations';
import { GetMicroLessons } from '../gql/queries';
import { QueryGetQuestion } from '../../../gql/contents/queries/questionAndAnswers';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Dispatch } from 'redux';
import { Nullable } from '../../../ts-types/base';
import {
  Answer,
  CreateQuestionInput,
  CreateAnswerInput,
  MicroLessonModel,
  QuestionModel,
  UpdateMicroLessonInput,
  UpdateQuestionInput,
  UpdateAnswerInput,
  DeleteAnswerInput,
} from '../../../ts-types/content';
import * as actionTypes from './types';

export const createMicroLessonRequest = () => ({
  type: actionTypes.CREATE_MICROLESSON_REQUEST,
});

export const createMicroLessonFailure = () => ({
  type: actionTypes.CREATE_MICROLESSON_FAILURE,
});

export const setReload = () => ({
  type: actionTypes.SET_CONTENT_SUCCESS,
});

export const setMicroLesson = (data: Nullable<MicroLessonModel>) => {
  return {
    type: actionTypes.SET_MICROLESSON,
    payload: {
      data,
    },
  };
};

export const UpdateTagsForMicroLesson = (id: string, tags: any) => {
  return {
    type: actionTypes.UPDATE_TAGS_FOR_MICROLESSON,
    payload: {
      id,
      tags,
    },
  };
};

export const getAllMicroLessonSuccess = (microLessons: MicroLessonModel[]) => {
  return {
    type: actionTypes.GET_ALL_MICROLESSONS,
    payload: microLessons,
  };
};

export const getAllMicroLessonFailed = (error: Error) => {
  return {
    type: actionTypes.GET_ALL_MICROLESSONS_FAILED,
    payload: error,
  };
};

export const updateMicroLesson = (payload: MicroLessonModel) => ({
  type: actionTypes.UPDATE_MICROLESSON,
  payload,
});

export const createMicroLessonSuccess = (payload: MicroLessonModel) => ({
  type: actionTypes.CREATE_MICROLESSON,
  payload,
});

export const removeMicroLessonSuccess = (payload: string) => ({
  type: actionTypes.REMOVE_MICROLESSON,
  payload,
});

export const putQuestionForMicroLesson = (payload: QuestionModel | null) => ({
  type: actionTypes.PUT_QUESTION_FOR_MICROLESSON,
  payload,
});

export const createQuestionSuccess = (payload: QuestionModel) => ({
  type: actionTypes.CREATE_QUESTION,
  payload,
});

export const updateQuestionSuccess = (payload: QuestionModel) => ({
  type: actionTypes.UPDATE_QUESTION,
  payload,
});

export const createAnswerSuccess = (payload: Answer) => ({
  type: actionTypes.CREATE_ANSWER,
  payload,
});

export const updateAnswerSuccess = (payload: Answer) => ({
  type: actionTypes.UPDATE_ANSWER,
  payload,
});

export const getListMicrolessons = (client: ApolloClient<unknown>) => {
  return (dispatch: Dispatch) => {
    const query = GetMicroLessons;
    client
      .query<{ getMicroLessonsCreatedByUser: MicroLessonModel[] }>({
        query,
        fetchPolicy: 'no-cache',
      })
      .then(response => {
        if (response.data.getMicroLessonsCreatedByUser) {
          dispatch(getAllMicroLessonSuccess(response.data.getMicroLessonsCreatedByUser));
        }
      })
      .catch(e => {
        dispatch(getAllMicroLessonFailed(e));
        console.log(' - err -', e);
      });
  };
};

export const getQuestion = (client: any, req: any) => {
  return (dispatch: any) => {
    const query = QueryGetQuestion;
    const variables = { ...req };
    client
      .query({
        query,
        fetchPolicy: 'no-cache',
        variables,
      })
      .then((response: any) => {
        if (response.data.getQuestion) {
          dispatch({
            type: actionTypes.GET_ALL_MICROLESSONS,
            payload: response.data.getQuestion,
          });
        }
      })
      .catch((e: any) => {
        console.log(' - err -', e);
      });
  };
};

export const removeMicroLesson = (client: ApolloClient<unknown>, variables: { id: string }, cb: any) => {
  return (dispatch: Dispatch) => {
    client
      .mutate({
        mutation: DeleteMicroLesson,
        fetchPolicy: 'no-cache',
        variables,
      })
      .then(() => {
        dispatch(removeMicroLessonSuccess(variables.id));
        cb(true);
      })
      .catch(() => {
        NotificationManager.error('User is not a creator!');
        cb(false);
      });
  };
};

export const CreateMicroLesson = (
  client: ApolloClient<unknown>,
  variables: { createMicroLesson: Omit<MicroLessonModel, '_id' | 'created_at'> },
  cb: any
) => {
  return (dispatch: Dispatch) => {
    dispatch(createMicroLessonRequest());
    client
      .mutate<{ createMicroLesson: MicroLessonModel }>({
        mutation: MutationCreateMicroLesson,
        fetchPolicy: 'no-cache',
        variables,
      })
      .then(res => {
        if (res.data?.createMicroLesson) {
          // dispatch(createMicroLessonSuccess(res.data?.createMicroLesson));
          cb(res.data?.createMicroLesson);
          NotificationManager.success('New microlesson is created successfully!');
        } else {
          dispatch(createMicroLessonFailure());
          NotificationManager.error('Sorry, the microlesson is not created!');
        }
      })
      .catch(() => {
        dispatch(createMicroLessonFailure());
        NotificationManager.error('Sorry, the microlesson is not created!');
      });
  };
};

export const UpdateMicroLesson = (
  client: ApolloClient<unknown>,
  variables: { updateMicroLessonInput: UpdateMicroLessonInput },
  cb: any
) => {
  return () => {
    client
      .mutate<{ updateMicroLesson: MicroLessonModel }>({
        mutation: MutationUpdateMicroLesson,
        fetchPolicy: 'no-cache',
        variables,
      })
      .then(res => {
        if (res.data?.updateMicroLesson) {
          // dispatch(updateMicroLesson(res.data?.updateMicroLesson));
          cb(true);
          NotificationManager.success('The microlesson is updated successfully!');
        } else {
          NotificationManager.error('Can`t update microlesson!');
        }
      })
      .catch(() => {
        NotificationManager.error('Sorry, the user roles were not provided!');
      });
  };
};

export const CreateQuestion = (
  client: ApolloClient<unknown>,
  variables: { createQuestionInput: CreateQuestionInput },
  cb: any
) => {
  return (dispatch: Dispatch) => {
    client
      .mutate<{ createQuestion: QuestionModel }>({
        mutation: MutationCreateQuestion,
        fetchPolicy: 'no-cache',
        variables,
      })
      .then(res => {
        if (res.data?.createQuestion) {
          dispatch(createQuestionSuccess(res.data?.createQuestion));
          cb(res.data?.createQuestion);
          NotificationManager.success('New question is created successfully!');
        } else {
          NotificationManager.error('Sorry, the question is not created!');
        }
      })
      .catch(() => {
        NotificationManager.error('Sorry, the question is not created!');
      });
  };
};

export const UpdateQuestion = (
  client: ApolloClient<unknown>,
  variables: { updateQuestionInput: UpdateQuestionInput },
  cb: any
) => {
  return (dispatch: Dispatch) => {
    client
      .mutate<{ updateQuestion: QuestionModel }>({
        mutation: MutationUpdateQuestion,
        fetchPolicy: 'no-cache',
        variables,
      })
      .then(res => {
        if (res.data?.updateQuestion) {
          dispatch(setReload());
          cb(res.data?.updateQuestion);
          NotificationManager.success('This question is updated successfully!');
        } else {
          NotificationManager.error('Sorry, this question is not updated!');
        }
      })
      .catch((e: any) => {
        NotificationManager.error(e.message);
      });
  };
};

export const CreateAnswer = (client: ApolloClient<unknown>, variables: { createAnswerInput: CreateAnswerInput }) => {
  return (dispatch: Dispatch) => {
    client
      .mutate<{ createAnswer: Answer }>({
        mutation: MutationCreateAnswer,
        fetchPolicy: 'no-cache',
        variables,
      })
      .then(res => {
        if (res.data?.createAnswer) {
          dispatch(createAnswerSuccess(res.data?.createAnswer));
        } else {
          NotificationManager.error('Sorry, the answer is not created!');
        }
      })
      .catch((e: any) => {
        NotificationManager.error(e.message);
      });
  };
};

export const UpdateAnswer = (client: ApolloClient<unknown>, variables: { updateAnswerInput: UpdateAnswerInput }) => {
  return (dispatch: Dispatch) => {
    client
      .mutate<{ updateAnswer: Answer }>({
        mutation: MutationUpdateAnswer,
        fetchPolicy: 'no-cache',
        variables,
      })
      .then(res => {
        if (res.data?.updateAnswer) {
          dispatch(updateAnswerSuccess(res.data?.updateAnswer));
        } else {
          NotificationManager.error('Sorry, the answer is not updated!');
        }
      })
      .catch((e: any) => {
        NotificationManager.error(e.message);
      });
  };
};

export const RemoveAnswer = (client: ApolloClient<unknown>, variables: { deleteAnswerInput: DeleteAnswerInput }) => {
  return () => {
    client
      .mutate<{ removeAnswer: Answer }>({
        mutation: MutationRemoveAnswer,
        fetchPolicy: 'no-cache',
        variables,
      })
      .then(res => {
        if (res.data) {
          // dispatch(removeAnswerSuccess(res.data?.deleteAnswer));
        } else {
          NotificationManager.error('Sorry, the answer is not removed!');
        }
      })
      .catch((e: any) => {
        NotificationManager.error(e.message);
      });
  };
};

export type MicroLessonActions = ReturnType<
  | typeof setMicroLesson
  | typeof getAllMicroLessonFailed
  | typeof getAllMicroLessonSuccess
  | typeof updateMicroLesson
  | typeof removeMicroLessonSuccess
  | typeof createMicroLessonSuccess
  | typeof createMicroLessonRequest
  | typeof createMicroLessonFailure
  | typeof UpdateTagsForMicroLesson
  | typeof setReload
  | typeof putQuestionForMicroLesson
  | typeof createQuestionSuccess
>;
