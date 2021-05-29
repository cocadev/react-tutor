import Grid from '@material-ui/core/Grid';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import React from 'react';
import Wrapper from './wrapper';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      padding: theme.spacing(2, 0),
      overflow: 'hidden',
    },
    error: {
      padding: theme.spacing(1),
    },
  });

type State = {
  hasError: boolean;
  error?: Error;
  eventId?: string;
};

class ErrorBoundary extends React.Component<WithStyles, State> {
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  constructor(props: WithStyles) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  render() {
    const { children, classes } = this.props;
    const { hasError, error } = this.state;
    if (hasError) {
      return (
        <Grid className={classes.root}>
          <Wrapper title="Something went wrong" desc={error ? error.message : error} />
        </Grid>
      );
    }
    return children;
  }
}

export default withStyles(styles)(ErrorBoundary);
