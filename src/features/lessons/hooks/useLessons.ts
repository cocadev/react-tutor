import { useMutation, gql, useApolloClient } from '@apollo/client';
import { useCallback } from 'react';
import { NotificationManager } from 'react-notifications';
import { useCache } from '../../../hooks';
import {
  Mutation,
  MutationAddTagsToLessonArgs,
  MutationCreateLessonArgs,
  MutationUpdateLessonArgs,
  MutationUpdateLessonsTagsArgs,
  MutationUpdateMicroLessonsInLessonArgs,
} from '../../../ts-types/content';
import _noop from 'lodash/fp/noop';

import {
  CREATE_LESSON,
  ADD_TAGS_TO_LESSON,
  UPDATE_MICRO_LESSONS_IN_LESSON,
  UPDATE_LESSON,
  UPDATE_LESSON_TAGS,
} from '../gql/mutations';
import { GET_LESSONS_QUERY } from '../gql/queries';
import { LessonData } from '../ts';

type AddLessonParams = {
  lesson: LessonData;
  tags: string[];
  mlIds: string[];
};

type UpdateLessonParams = AddLessonParams & {
  id: string;
};

function useLessons() {
  const { getCachedLessons } = useCache();
  const { mutate } = useApolloClient();

  const [createLesson] = useMutation<{ createLesson: Mutation['createLesson'] }, MutationCreateLessonArgs>(
    CREATE_LESSON,
    {
      update(cache, { data }) {
        cache.modify({
          fields: {
            getLessonsCreatedByUser(existingLessons = []) {
              const newLessonRef = cache.writeFragment({
                data: data?.createLesson,
                fragment: gql`
                  fragment NewLessonModel on LessonModel {
                    _id
                    title
                    description
                    goal
                  }
                `,
              });
              return [newLessonRef, ...existingLessons];
            },
          },
        });
      },
      onError: () => {
        NotificationManager.error('Lesson creation failed!');
      },
    }
  );

  const [updateLesson] = useMutation<{ updateLesson: Mutation['updateLesson'] }, MutationUpdateLessonArgs>(
    UPDATE_LESSON,
    {
      update(cache, { data }) {
        const lessons = getCachedLessons(cache);
        if (lessons && data) {
          const updatedLessons = lessons.getLessonsCreatedByUser.map(l =>
            l._id === data.updateLesson?._id ? { ...l, ...data.updateLesson } : l
          );
          cache.writeQuery({ query: GET_LESSONS_QUERY, data: updatedLessons });
        }
      },
      onError: () => {
        NotificationManager.error('Lesson update failed!');
      },
    }
  );

  const [addTags] = useMutation<{ addTagsToLesson: Mutation['addTagsToLesson'] }, MutationAddTagsToLessonArgs>(
    ADD_TAGS_TO_LESSON,
    {
      onError: _noop,
    }
  );

  const updateTags = useCallback(
    (variables: MutationUpdateLessonsTagsArgs) => {
      return mutate<{ updateLessonsTags: Mutation['updateLessonsTags'] }>({
        mutation: UPDATE_LESSON_TAGS,
        variables,
        update(cache, { data }) {
          const lessons = getCachedLessons(cache);
          if (lessons && data) {
            const updatedLessons = lessons.getLessonsCreatedByUser.map(l =>
              l._id === variables.updateLessonsTagsInput.id ? { ...l, tags: data?.updateLessonsTags } : l
            );
            cache.writeQuery({ query: GET_LESSONS_QUERY, data: updatedLessons });
          }
        },
      });
    },
    [mutate, getCachedLessons]
  );

  const [updateML] = useMutation<
    { updateMicroLessonsInLesson: Mutation['updateMicroLessonsInLesson'] },
    MutationUpdateMicroLessonsInLessonArgs
  >(UPDATE_MICRO_LESSONS_IN_LESSON, {
    update(cache, { data }) {
      const lessons = getCachedLessons(cache);
      if (lessons && data) {
        const updatedLessons = lessons.getLessonsCreatedByUser.map(l =>
          l._id === data.updateMicroLessonsInLesson?._id ? { ...l, ...data.updateMicroLessonsInLesson } : l
        );
        cache.writeQuery({ query: GET_LESSONS_QUERY, data: updatedLessons });
      }
    },
    onError: _noop,
  });

  const onAddLesson = useCallback(
    async ({ lesson, mlIds, tags }: AddLessonParams) => {
      const resp = await createLesson({ variables: { createLessonInput: lesson } });
      const lessonId = resp?.data?.createLesson?._id;
      if (lessonId) {
        await addTags({ variables: { addTagsToLessonInput: { id: lessonId, tags } } });
        await updateML({
          variables: { updateMicroLessonsInLessonInput: { lesson_id: lessonId, micro_lessons: mlIds } },
        });
      }
    },
    [createLesson, addTags, updateML]
  );

  const onUpdateLesson = useCallback(
    async ({ lesson, tags, mlIds, id }: UpdateLessonParams) => {
      await updateLesson({ variables: { updateLessonInput: { id, ...lesson } } });
      await updateTags({ updateLessonsTagsInput: { id, tags } });
      await updateML({
        variables: { updateMicroLessonsInLessonInput: { lesson_id: id, micro_lessons: mlIds } },
      });
    },
    [updateLesson, updateTags, updateML]
  );

  return {
    onAddLesson,
    onUpdateLesson,
  };
}

export default useLessons;
