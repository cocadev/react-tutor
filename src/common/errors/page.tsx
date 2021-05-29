import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1),
  },
  error: {
    fontWeight: 600,
  },
}));

type Props = {
  /**
   * Error message
   */
  error: string;
};

const PageError: React.FC<Props> = ({ error }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} alignItems="center" justify="center">
      <Typography variant="h4" className={classes.error}>
        {error}
      </Typography>
    </Grid>
  );
};

export default PageError;
