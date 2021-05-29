import { Theme } from '@material-ui/core';
import { CircularProgressProps } from '@material-ui/core/CircularProgress';
import grey from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Lottie from 'lottie-react';
import React from 'react';
import Animation from '../utils/loading2.json';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  progress: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    zIndex: 2,
  },
}));

export type BasicLoaderProps = Pick<CircularProgressProps, 'thickness' | 'color'> & {
  size?: number;
  background?: string;
};

const BasicLoader: React.FC<BasicLoaderProps> = ({ thickness = 3.6, size = 40, background = grey[200] }) => {
  const classes = useStyles({ size, thickness, background });
  return (
    <Grid container alignItems="center" justify="center">
      <Lottie animationData={Animation} className={classes.progress} />
    </Grid>
  );
};

export default BasicLoader;
