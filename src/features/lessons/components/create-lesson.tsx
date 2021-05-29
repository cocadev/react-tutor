import { useQuery } from '@apollo/client';
import { Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import grey from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { NotificationManager } from 'react-notifications';
import { useHistory } from 'react-router-dom';
import TagsInput from 'react-tagsinput';

import { Buttons, Cards, Chips, Forms } from '../../../common';
import { ROUTES } from '../../../constants/routes';
import { useLessons } from '../../../hooks';
import { LessonModel, Query } from '../../../ts-types/content';
import { GetMicroLessons } from '../../micro-lessons/gql/queries';
import { MicroLessonsSearch } from '../components';
import { LessonData } from '../ts';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flexWrap: 'nowrap',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
    },
  },
  elementWrapper: {
    flexGrow: 1,
    flexBasis: 1,
    padding: theme.spacing(1),
    minWidth: theme.spacing(30),
    [theme.breakpoints.down('sm')]: {
      flex: 'unset',
      width: '100%',
    },
  },
  search: {
    maxWidth: theme.spacing(50),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'none',
    },
  },
  element: {
    width: '100%',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
  },
  field: {
    padding: theme.spacing(2, 0, 1),
  },
  subtitle: {
    padding: theme.spacing(2, 0, 1),
    fontSize: 12,
    color: grey[400],
  },
  label: {
    display: 'block',
    color: grey[400],
    fontSize: 12,
    paddingBottom: theme.spacing(2),
  },
}));

const INITIAL_STATE: LessonData = {
  title: '',
  description: '',
};

type Props = {
  lesson?: LessonModel;
  title?: string;
};

const CreateLesson: React.FC<Props> = ({ title, lesson }) => {
  const [state, setState] = useState(INITIAL_STATE);
  const [isLoading, setLoading] = useState(false);
  const [microIds, setMicroIds] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const { push } = useHistory();
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const { onAddLesson, onUpdateLesson } = useLessons();
  const { data: allMicroLessons, loading: mlIsLoading } = useQuery<{
    getMicroLessonsCreatedByUser: Query['getMicroLessonsCreatedByUser'];
  }>(GetMicroLessons);

  const microLessons = useMemo(() => allMicroLessons?.getMicroLessonsCreatedByUser || [], [allMicroLessons]);

  const selectedML = useMemo(() => microLessons.filter(item => microIds.includes(item._id)), [microLessons, microIds]);

  useEffect(() => {
    if (lesson && !isLoading) {
      setState({
        title: lesson.title,
        description: lesson.description,
      });
      lesson.tags && setTags(lesson.tags?.map(t => t.text));
      lesson.micro_lessons && setMicroIds(lesson.micro_lessons?.map(ml => ml._id));
    }
  }, [lesson, setState, setTags, setMicroIds, isLoading]);

  const handleState = (type: keyof typeof INITIAL_STATE) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setState({ ...state, [type]: e.target.value });

  const handleMicroIds = useCallback(
    (id: string) => {
      const updatedIds = microIds.includes(id) ? microIds.filter(microId => microId !== id) : [...microIds, id];
      setMicroIds(updatedIds);
      const mlTags = microLessons
        .filter(ml => updatedIds.includes(ml._id))
        .reduce((res, ml) => {
          if (ml.tags) {
            res = [...res, ...ml.tags.map(t => t.text)];
          }
          return res;
        }, [] as string[]);
      setTags(mlTags);
    },
    [setTags, microIds, setMicroIds, microLessons]
  );

  const handleTag = (text: string) => setTags(tags.includes(text) ? tags.filter(t => t !== text) : [...tags, text]);

  const getMLDesc = useCallback(
    (id: string) => `${microLessons?.find(microLesson => microLesson._id === id)?.content?.description}`,
    [microLessons]
  );

  const handleSave = useCallback(async () => {
    try {
      setLoading(true);
      if (lesson?._id) {
        await onUpdateLesson({
          lesson: state,
          id: lesson._id,
          mlIds: microIds,
          tags,
        });
      } else {
        await onAddLesson({
          lesson: state,
          mlIds: microIds,
          tags,
        });
      }
      setLoading(false);
      push(ROUTES.lessons);
    } catch (e) {
      setLoading(false);
    }
  }, [push, tags, state, microIds, onAddLesson, lesson, onUpdateLesson]);

  const onSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!state.title) {
        NotificationManager.error('You must add title content!');
      } else {
        await handleSave();
        NotificationManager.success(lesson?._id ? 'Lesson updated!' : 'Lesson created!');
      }
    },
    [state, handleSave, lesson]
  );

  return (
    <>
      <Box p={5}>
        <Typography variant="h2" component="h1">
          {title || 'Create Lesson'}
        </Typography>
      </Box>
      <Paper>
        <form onSubmit={onSubmit}>
          <Grid container className={classes.container}>
            <Grid className={classes.elementWrapper}>
              <Paper elevation={3} className={classes.element}>
                <Forms.BaseInput
                  required
                  id="title"
                  name="title"
                  label="Title*"
                  variant="outlined"
                  value={state.title}
                  onChange={handleState('title')}
                />
                <Forms.BaseInput
                  id="description"
                  rows={isMobile ? 3 : 6}
                  variant="outlined"
                  label="Description"
                  multiline
                  name="description"
                  spellCheck="false"
                  value={state.description}
                  onChange={handleState('description')}
                />
                <Grid className={classes.field}>
                  <label htmlFor="tags" className={classes.label}>
                    Tags
                  </label>
                  <TagsInput
                    id={'tags'}
                    value={tags}
                    onChange={(newTags: string[]) => {
                      setTags(newTags);
                    }}
                    addOnPaste
                    onlyUnique
                    inputProps={{
                      maxLength: 20,
                      placeholder: '',
                    }}
                  />
                </Grid>
                <Typography className={classes.subtitle}>Selected Micro Lessons</Typography>
                <Box mb={2}>
                  {microLessons.length
                    ? microIds.map(id => (
                        <Chips.Base
                          size="medium"
                          label={getMLDesc(id)}
                          onDelete={() => handleMicroIds(id)}
                          key={id}
                          onClick={() => handleMicroIds(id)}
                        />
                      ))
                    : null}
                </Box>

                <Buttons.WithLoading
                  isLoading={isLoading}
                  size="large"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  {lesson?._id ? 'Update' : 'Save'}
                </Buttons.WithLoading>
              </Paper>
            </Grid>
            <Grid className={clsx(classes.elementWrapper, classes.search)}>
              <Paper elevation={3} className={classes.element}>
                <MicroLessonsSearch
                  loading={mlIsLoading}
                  microLessons={microLessons}
                  selectedMLIds={microIds}
                  setTag={handleTag}
                  setMLId={handleMicroIds}
                />
              </Paper>
            </Grid>
            {selectedML.length ? (
              <Grid className={classes.elementWrapper}>
                {selectedML.map(microLesson => (
                  <Grid key={microLesson._id}>
                    <Cards.MicroLesson
                      content={microLesson?.content}
                      questions={microLesson?.questions}
                      id={microLesson._id}
                      publish
                      tags={microLesson.tags}
                      dispatching={() => handleMicroIds(microLesson._id)}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : null}
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default CreateLesson;
