import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { CourseModel } from '../../ts-types/content';
import { setCourse } from '../../features/courses/redux/actions';
import { Chip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'relative',
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1.5),
  },
  navigation: {
    position: 'absolute',
    top: '1px',
    right: '1px',
    textAlign: 'center',
    borderRadius: theme.spacing(0, 1.5, 0, 1.5),
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
  },
  title: {
    fontWeight: 'normal',
    textAlign: 'left',
    padding: theme.spacing(1, 2),
    lineHeight: 1.2,
    fontFamily: 'SourceSansPro-Regular, sans-serif',
  },
  sub_title: {
    fontWeight: 'normal',
    textAlign: 'left',
    padding: theme.spacing(1, 2),
    fontFamily: 'SourceSansPro-Regular, sans-serif',
  },
  tags: {
    padding: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
  },
  date: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.common.white,
    borderRadius: theme.spacing(1.5),
    background: theme.palette.primary.main,
  },
  dateBox: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
  },
}));

type Props = {
  course: CourseModel;
  onClick?: () => void;
};

const CourseContentCard: React.FC<Props> = ({ course, onClick }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClick = useCallback(() => onClick || dispatch(setCourse(course)), [onClick, dispatch, course]);
  const startDate = course?.start_date ? new Date(course?.start_date).toDateString() : null;
  const endDate = course?.end_date ? new Date(course?.end_date).toDateString() : null;
  return (
    <Box mb={2} p={1}>
      <Paper onClick={handleClick} elevation={5} className={classes.paper}>
        <Chip className={classes.navigation} label={course?.navigation} />
        <Typography variant="h2" component="p" className={classes.title}>
          {course?.title}
        </Typography>
        <Typography variant="h2" component="p" className={classes.sub_title}>
          {course?.description}
        </Typography>
        <Grid className={classes.dateBox}>
          <Chip className={classes.date} label={startDate} />
          <Chip className={classes.date} label={endDate} />
        </Grid>
      </Paper>
    </Box>
  );
};

export default CourseContentCard;
