import { ApolloProvider } from '@apollo/client';
import { createStyles, CssBaseline, makeStyles } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-notifications/lib/notifications.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './styles/sass/app.sass';
import './global.scss';
import { client } from './gql/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';
import store from './store/store';
import theme from './styles/theme';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
      },
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%',
      },
      body: {
        height: '100%',
        width: '100%',
        backgroundColor: '#f4f6f8',
      },
      '#root': {
        height: '100%',
        width: '100%',
      },
      a: {
        textDecoration: 'none',
        color: 'inherit',
      },
      img: {
        maxWidth: '100%',
      },
    },
  })
);

const App = () => {
  useStyles();
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <CssBaseline>
            <MuiThemeProvider theme={theme}>
              <Routes />
            </MuiThemeProvider>
          </CssBaseline>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
