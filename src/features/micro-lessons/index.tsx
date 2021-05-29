import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { useSelector } from 'react-redux';

import { Errors, Headers, Loaders } from '../../common';
import { ROUTES } from '../../constants/routes';
import { IRootReducerState } from '../../store/IRootReducer';
import { MicroLessons } from './components';

const MicroLessonsRoot = () => {
  const { microLessons, loading, error } = useSelector((state: IRootReducerState) => state.microLessonReducer);

  return (
    <Grid>
      <Headers.Main title="Micro Lessons" link={ROUTES.addContent} btn="Create Micro-Lesson" />
      <Paper>
        {error ? (
          <Errors.Page error="Can't load lessons..." />
        ) : loading ? (
          <Loaders.Basic />
        ) : (
          <MicroLessons data={microLessons} />
        )}
      </Paper>
    </Grid>
  );
};

export default MicroLessonsRoot;
