import { makeStyles } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid';
import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1),
    color: grey[600],
  },
}));

type Props = {
  title?: string;
};

const Empty: React.FC<Props> = ({ title }) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Typography>{title}</Typography>
    </Grid>
  );
};

export default Empty;
