import { ButtonProps } from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { Buttons } from '../../common';

type Props = ButtonProps & {
  title: string;
  loading?: boolean;
};

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: theme.spacing(1.5),
    background: theme.palette.common.white,
    padding: theme.spacing(2, 6),
    margin: theme.spacing(2, 0),
    color: theme.palette.primary.main,
    fontSize: 16,
    '&:hover': {
      background: theme.palette.common.white,
    },
  },
}));

const AuthButton: React.FC<Props> = ({ title, loading, disabled, ...props }) => {
  const classes = useStyles();
  return (
    <Buttons.WithLoading
      type="submit"
      isLoading={loading}
      color="secondary"
      className={classes.root}
      disabled={disabled}
      {...props}
    >
      {title}
    </Buttons.WithLoading>
  );
};

export default AuthButton;
