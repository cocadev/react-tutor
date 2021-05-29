import { makeStyles, Theme } from '@material-ui/core/styles';
import { COLORS } from '../../../common/data/colors';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: theme.spacing(2),
  },
  title: {
    fontFamily: 'Poppins, sans-serif',
    color: theme.palette.common.white,
    textAlign: 'center',
    opacity: 0.8,
    fontSize: 20,
    marginTop: 10,
  },
  verification: {
    borderRadius: theme.spacing(2),
    color: theme.palette.common.white,
    background: theme.palette.primary.main,
    boxShadow: '0 0 16px #3a50d9, 0 16px 16px #cfc8ff',
    padding: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(5),
    },
  },
  form: {
    width: '100%',
    maxWidth: theme.breakpoints.width('md') / 2,
    borderRadius: theme.spacing(2),
    color: theme.palette.common.white,
    boxShadow: '0 0 16px #3a50d9, 0 16px 16px #cfc8ff',
    background: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(3, 5),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
  passwordNotification: {
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '36px',
    lineHeight: 1.5,
    fontWeight: 600,
    padding: theme.spacing(1, 0),
    fontFamily: 'Poppins, sans-serif',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
  signUpText: {
    padding: theme.spacing(0, 0.5),
    fontWeight: 'bold',
    color: COLORS.YELLOW,
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));
