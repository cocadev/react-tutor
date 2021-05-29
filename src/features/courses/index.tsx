import React, { FC } from 'react';

import { Headers, Errors, Loaders } from '../../common';
import { ROUTES } from '../../constants/routes';
import { useQuery } from '@apollo/client';
import { Query } from '../../ts-types/content';
import { GET_COURSES_QUERY } from './gql/queries';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { Courses } from './components';

const CoursesRoot: FC = () => {
  const { data, error, loading } = useQuery<{ getCoursesCreatedByUser: Query['getCoursesCreatedByUser'] }>(
    GET_COURSES_QUERY
  );
  return (
    <Grid>
      <Headers.Main title={'Courses'} link={ROUTES.createCourse} btn={'Create Course'} />
      <Paper>
        {error ? (
          <Errors.Page error="Can't load courses..." />
        ) : loading ? (
          <Loaders.Basic />
        ) : (
          <Courses data={data?.getCoursesCreatedByUser} />
        )}
      </Paper>
    </Grid>
  );
};

export default CoursesRoot;
