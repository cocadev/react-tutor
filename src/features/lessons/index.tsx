import { useQuery } from '@apollo/client';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';

import { Headers, Loaders, Errors } from '../../common';
import { ROUTES } from '../../constants/routes';
import { Query } from '../../ts-types/content';
import { Lessons } from './components';
import { GET_LESSONS_QUERY } from './gql/queries';

const LessonsRoot = () => {
  const { data, loading, error } = useQuery<{ getLessonsCreatedByUser: Query['getLessonsCreatedByUser'] }>(
    GET_LESSONS_QUERY
  );
  return (
    <Grid>
      <Headers.Main title="Lessons" link={ROUTES.createLesson} btn="Create Lesson" />
      <Paper>
        {error ? (
          <Errors.Page error="Can't load lessons..." />
        ) : loading ? (
          <Loaders.Basic />
        ) : (
          <Lessons data={data?.getLessonsCreatedByUser} />
        )}
      </Paper>
    </Grid>
  );
};

export default LessonsRoot;
