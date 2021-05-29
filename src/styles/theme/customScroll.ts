import { makeStyles, Theme } from '@material-ui/core/styles';

export const useCustomScroll = makeStyles((theme: Theme) => ({
  scroll: {
    fontFamily: 'Roboto, sans-serif',
    overflowY: 'auto',
    overflowX: 'hidden',
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
    '&::-webkit-scrollbar': {
      width: theme.spacing(1),
    },
    '&::-webkit-scrollbar-thumb': {
      background: theme.palette.primary.main,
      borderRadius: theme.spacing(1),
    },
  },
}));
