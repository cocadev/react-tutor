import { makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import React from 'react';

import logo from '../../assests/logo.png';
import { BRAND } from '../../constants/general';
import { ROUTES } from '../../constants/routes';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0.5),
    height: theme.spacing(7),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },
  container: {
    cursor: 'pointer',
    position: 'relative',
    height: '100%',
  },
  image: {
    height: '100%',
    maxWidth: '100%',
  },
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <Link to={ROUTES.main}>
      <Grid className={classes.root}>
        <Grid container justify="center" alignItems="center" wrap="nowrap" className={classes.container}>
          <img src={logo} alt={BRAND.name} className={classes.image} title={BRAND.name} />
        </Grid>
      </Grid>
    </Link>
  );
};

export default Logo;
