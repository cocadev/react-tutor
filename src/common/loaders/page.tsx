import grey from '@material-ui/core/colors/grey';
import { fade, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
  root: {
    zIndex: 30000,
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    backgroundColor: fade(grey[200], 0.6),
  },
  container: {
    height: '100%',
  },
  circularProgress: {
    position: 'fixed',
    top: 'calc(50% - 45px)',
    left: 'calc(50% - 45px)',
  },
}));

const PageLoader = () => {
  const classes = useStyles({});
  return (
    <Grid className={classes.root}>
      <Grid container justify="center" alignItems="center" className={classes.container}>
        <CircularProgress className={classes.circularProgress} size={90} thickness={1} color="primary" />
      </Grid>
    </Grid>
  );
};

export default PageLoader;
