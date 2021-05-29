import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';

import { Info, Loaders } from '../../common';
import { ROUTES } from '../../constants/routes';
import { Query, QueryGetLessonArgs } from '../../ts-types/content';
import { CreateLesson } from './components';
import { GET_LESSON_QUERY } from './gql/queries';

const UpdateLesson = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useQuery<{ getLesson: Query['getLesson'] }, QueryGetLessonArgs>(GET_LESSON_QUERY, {
    variables: { id },
  });
  return loading ? (
    <Loaders.Page />
  ) : error || !data ? (
    <Info.NotFound title="Lesson was not found..." backLink={ROUTES.lessons} />
  ) : (
    <CreateLesson lesson={data.getLesson} title="Update Lesson" />
  );
};

export default UpdateLesson;
