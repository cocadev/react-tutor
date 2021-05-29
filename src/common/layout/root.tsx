import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React, { ReactNode } from 'react';
import { NotificationContainer } from 'react-notifications';
import { Sidebar } from '../index';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    position: 'relative',
  },
  content: {
    flex: 1,
    flexWrap: 'nowrap',
  },
  container: {
    padding: theme.spacing(1, 3, 2),
    overflowY: 'hidden',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },
}));

type Props = {
  children: NonNullable<ReactNode>;
};

const RootLayout: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column" justify="center">
      <Grid container className={classes.content} justify="center">
        <Sidebar />
        <Container className={classes.container}>{children}</Container>
      </Grid>
      <NotificationContainer />
    </Grid>
  );
};

export default RootLayout;
