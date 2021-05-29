import grey from '@material-ui/core/colors/grey';
import Grid, { GridProps } from '@material-ui/core/Grid';
import InputLabel, { InputLabelProps } from '@material-ui/core/InputLabel';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2, 0, 1),
  },
  label: {
    color: grey[400],
    fontSize: 12,
    paddingBottom: theme.spacing(2),
  },
}));

type Props = TextFieldProps & {
  labelProps?: InputLabelProps;
  gridProps?: GridProps;
};

const BaseInput: React.FC<Props> = ({ label, gridProps, labelProps, id, ...props }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} {...gridProps}>
      <InputLabel className={classes.label} htmlFor={id} {...labelProps}>
        {label}
      </InputLabel>
      <TextField id={id} fullWidth variant="outlined" {...props} />
    </Grid>
  );
};

export default BaseInput;
