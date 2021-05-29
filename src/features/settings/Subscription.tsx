import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Link,
  Paper,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  overview: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
      alignItems: 'flex-start',
    },
  },
  productImage: {
    marginRight: theme.spacing(1),
    height: 48,
    width: 48,
  },
  details: {
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
}));

function Subscription() {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root)}>
      <CardHeader title="Manage your subscription" />
      <Divider />
      <CardContent>
        <Paper variant="outlined">
          <Box className={classes.overview}>
            <div>
              <Typography display="inline" variant="h4" color="textPrimary">
                {'$'}
                {5}
              </Typography>
              <Typography display="inline" variant="subtitle1">
                /mo
              </Typography>
            </div>
            <Box display="flex" alignItems="center">
              <Typography variant="overline" color="textSecondary">
                {'Freelancer'}
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box className={classes.details}>
            <div>
              <Typography variant="body2" color="textPrimary">
                {`12 proposals left`}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                {`5 templates`}
              </Typography>
            </div>
            <div>
              <Typography variant="body2" color="textPrimary">
                {`24 invites left`}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                {`10 ads left`}
              </Typography>
            </div>
            <div>
              <Typography variant="body2" color="textPrimary">
                Analytics dashboard
              </Typography>

              <Typography variant="body2" color="textPrimary">
                Email alerts
              </Typography>
            </div>
          </Box>
        </Paper>
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button size="large" color="secondary" variant="contained">
            Upgrade plan
          </Button>
        </Box>
        <Box mt={2}>
          <Typography variant="body2" color="textSecondary">
            The refunds don&apos;t work once you have the subscription, but you can always{' '}
            <Link color="secondary" component={RouterLink} to="#">
              Cancel your subscription
            </Link>
            .
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Subscription;
