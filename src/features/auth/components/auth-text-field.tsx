import { makeStyles, Theme } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import React from 'react';
import { COLORS } from '../../../common/data/colors';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: COLORS.LIGHTBLUE,
    margin: theme.spacing(1.5),
    borderRadius: theme.spacing(1.5),
    color: theme.palette.common.white,
    padding: theme.spacing(1, 2),
  },
}));

const AuthTextField: React.FC<TextFieldProps> = ({ ...props }) => {
  const classes = useStyles();
  return (
    <TextField
      fullWidth
      classes={{
        root: classes.root,
      }}
      InputProps={{
        disableUnderline: true,
      }}
      {...props}
    />
  );
};

export default AuthTextField;
