import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import Chip, { ChipProps } from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'inline-block',
    width: 'auto',
    padding: theme.spacing(0.5),
  },
}));

const BaseChip: React.FC<ChipProps> = ({ ...props }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Chip size="small" color="primary" {...props} />
    </Grid>
  );
};

export default BaseChip;
