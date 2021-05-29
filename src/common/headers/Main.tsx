import Grid from '@material-ui/core/Grid';
import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { IMAGES } from '../data/images';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  btn: {
    borderRadius: theme.spacing(1.5),
    background: '#fff',
    padding: theme.spacing(2, 6),
  },
  content: {
    padding: theme.spacing(0, 0, 3),
  },
  paper: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: theme.palette.primary.main,
    overflow: 'hidden',
    padding: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
  title: {
    zIndex: 1,
    fontSize: '2.5rem',
    fontWeight: 600,
    color: theme.palette.common.white,
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
      paddingBottom: theme.spacing(2),
    },
  },
  imageContainer: {
    position: 'absolute',
    maxWidth: theme.spacing(70),
    right: 0,
    [theme.breakpoints.down('lg')]: {
      maxWidth: theme.spacing(45),
      right: theme.spacing(4),
    },
    [theme.breakpoints.down('md')]: {
      top: '50%',
      maxWidth: theme.spacing(20),
      transform: 'translateY(-50%)',
    },
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      right: 'auto',
      top: 'unset',
      width: '100%',
      transform: 'unset',
      maxWidth: '100%',
      display: 'flex',
      justifyContent: 'center',
      height: theme.spacing(10),
    },
  },
  image: {
    [theme.breakpoints.down('xs')]: {
      maxWidth: theme.spacing(10),
    },
  },
}));

type Props = {
  title: string;
  goToLinks?: () => void;
  link?: string;
  btn: string;
};

const MainHeader = ({ title, goToLinks, btn, link }: Props) => {
  const classes = useStyles();
  return (
    <Grid>
      <Box p={5}>
        <Typography variant="h2" component="h1">
          {title}
        </Typography>
      </Box>
      <Grid className={classes.content}>
        <Paper className={classes.paper}>
          <div className={classes.imageContainer}>
            <img className={classes.image} src={IMAGES.BannerPic} alt="" />
          </div>
          <Grid>
            <Typography variant="h3" component="h2" className={classes.title}>
              {title}
            </Typography>
            {link ? (
              <Link to={link}>
                <Button variant="contained" onClick={goToLinks} className={classes.btn}>
                  {btn}
                </Button>
              </Link>
            ) : (
              <Button variant="contained" onClick={goToLinks} className={classes.btn}>
                {btn}
              </Button>
            )}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MainHeader;
