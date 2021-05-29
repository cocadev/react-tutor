import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { BRAND } from '../../constants/general';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.secondary.main,
  },
  container: {
    padding: theme.spacing(1.5, 0),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1, 0),
    },
  },
  copyright: {
    color: theme.palette.secondary.contrastText,
    fontSize: '0.87rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.87rem',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container className={classes.container}>
        <Typography color="textPrimary" align="center" className={classes.copyright}>
          {`© ${new Date().getFullYear()}  ${BRAND.name} - All rights reserved`}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
