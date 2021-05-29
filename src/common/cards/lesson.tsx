import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import { LessonModel } from '../../ts-types/content';
import { Cards, Chips } from '../index';
import UtilService from '../utils/utils';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 0,
    borderRadius: theme.spacing(1.5),
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'left',
    padding: theme.spacing(1, 2),
    lineHeight: 1.2,
    fontFamily: 'SourceSansPro-Regular, sans-serif',
  },
  tags: {
    padding: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
  },
  counter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.common.white,
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: '50%',
    background: theme.palette.primary.main,
  },
  counterBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(1),
  },
}));

type Props = {
  lesson: LessonModel;
  onClick?: () => void;
};

const LessonContentCard: React.FC<Props> = ({ lesson, onClick }) => {
  const classes = useStyles();
  return (
    <Box mb={2} p={1}>
      <Paper onClick={onClick} elevation={5} className={classes.paper}>
        <Cards.Video data={UtilService.getVideo(lesson?.micro_lessons)} />
        {lesson?.tags?.length ? (
          <Grid className={classes.tags}>
            {lesson?.tags?.map(tag => (
              <Chips.Tag key={tag._id} label={tag.text} />
            ))}
          </Grid>
        ) : null}
        <Typography variant="h2" component="p" className={classes.title}>
          {lesson.title}
        </Typography>
        <Grid className={classes.counterBox}>
          <Grid className={classes.counter}>{lesson?.micro_lessons?.length}</Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default LessonContentCard;
