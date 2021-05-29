import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    padding: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(3, 6),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3),
    },
  },
  title: {
    fontWeight: 600,
    color: grey[600],
  },
  buttonContainer: {
    padding: theme.spacing(4, 2, 2),
  },
}));

type Props = {
  title?: string;
  backLink?: string;
  buttonTitle?: string;
  hideButton?: boolean;
};

const NotFound: React.FC<Props> = ({ title = 'Not found...', backLink, buttonTitle, hideButton }) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Paper className={classes.paper}>
        <Typography className={classes.title}>{title}</Typography>
        {!hideButton && (
          <Grid container justify="center" alignItems="center" className={classes.buttonContainer}>
            <Button variant="contained" color="primary" component={Link} to={backLink || ROUTES.main}>
              {buttonTitle || 'Back'}
            </Button>
          </Grid>
        )}
      </Paper>
    </Grid>
  );
};

export default NotFound;
