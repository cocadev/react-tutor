import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link, Route } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    errorWrap: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      position: 'relative',
    },
    title: {
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(2),
      },
    },
    button: {
      marginTop: 24,
    },
    desc: {
      padding: theme.spacing(1),
    },
  })
);

type Props = {
  /**
   * Error description
   */
  desc?: string;
  /**
   * Error message
   */
  title: string;
};

const ErrorWrapper: React.FC<Props> = ({ title, desc }) => {
  const classes = useStyles();
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.statusCode = 404;
        }
        return (
          <Grid className={classes.errorWrap}>
            <Typography className={classes.title} variant="h3">
              {title}
            </Typography>
            {desc && (
              <Typography className={classes.desc} variant="subtitle2">
                {desc}
              </Typography>
            )}
            <Button variant="contained" color="primary" className={classes.button} component={Link} to={ROUTES.main}>
              Back
            </Button>
          </Grid>
        );
      }}
    />
  );
};

export default ErrorWrapper;
