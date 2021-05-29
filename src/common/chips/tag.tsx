import { Theme, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Chip, { ChipProps } from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import { COLORS } from '../data/colors';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'inline-block',
    width: 'auto',
    padding: 0,
  },
  chip: {
    backgroundColor: 'transparent',
    color: COLORS.BLUE,
    padding: 0,
  },
  icon: {
    width: theme.spacing(1.5),
    paddingRight: theme.spacing(0.5),
  },
}));

type Props = ChipProps & {
  noCircle?: boolean;
};

const TagChip: React.FC<Props> = ({ noCircle, label, ...props }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Chip
        size="small"
        color="primary"
        label={
          noCircle ? (
            label
          ) : (
            <Grid container justify="center" alignItems="center" wrap="nowrap">
              <RadioButtonUncheckedIcon className={classes.icon} />
              {label}
            </Grid>
          )
        }
        className={classes.chip}
        {...props}
      />
    </Grid>
  );
};

export default TagChip;
