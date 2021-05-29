import { colors } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiChip: {
      root: {
        height: 'auto',
        minHeight: 32,
      },
      label: {
        paddingTop: 4,
        paddingBottom: 4,
        whiteSpace: 'normal',
        wordBreak: 'break-all',
      },
      sizeSmall: {
        height: 'auto',
        minHeight: 24,
      },
      labelSmall: {
        paddingTop: 2,
        paddingBottom: 2,
      },
    },
    MuiButton: {
      root: {
        borderRadius: 12,
        padding: '8px 22px',
      },
    },
    MuiPaper: {
      rounded: {
        padding: 8,
        borderRadius: 24,
      },
    },
    MuiOutlinedInput: {
      root: {
        backgroundColor: grey[100],
        borderRadius: 8,
        '& fieldset': {
          borderColor: 'transparent',
        },
        '&:hover $notchedOutline': {
          borderColor: grey[400],
        },
        '&$focused': {
          backgroundColor: '#fff',
        },
      },
    },
  },

  palette: {
    type: 'light',
    action: {
      active: colors.blueGrey[600],
    },
    background: {
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: '#6C5DD3',
    },
    secondary: {
      main: '#5850EC',
    },
    error: {
      main: '#c80000',
      light: '#a00000',
    },
    text: {
      primary: colors.blueGrey[900],
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Inter"',
    ].join(','),
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: 14,
      fontFamily: 'Inter',
      padding: '0 20px',
    },
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    h3: {
      fontSize: '1.17rem',
    },
    h4: {
      fontSize: '1rem',
    },
    h5: {
      fontSize: '0.83rem',
    },
    h6: {
      fontSize: '0.67rem',
    },
    body2: {
      whiteSpace: 'normal',
      wordBreak: 'break-all',
    },
  },
});

export default theme;
