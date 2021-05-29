import { ApolloClient, createHttpLink, NormalizedCacheObject } from '@apollo/client';
import { gql } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { APP_KEY, BASE_API_URL } from '../constants/config';
import { clearAuthData, getToken } from '../utils/localStorage';
import { cache, clearAuthVars } from './cache';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;

const httpLink = createHttpLink({
  uri: BASE_API_URL,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'app-key': APP_KEY,
      authorization: getToken() ? `Bearer ${getToken()}` : '',
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      if (message.includes('Access denied!')) {
        clearAuthData();
        clearAuthVars();
      }
    });
  }

  if (networkError) {
    if (networkError.message.includes('Received status code 401')) {
      clearAuthData();
      clearAuthVars();
    }
  }
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: errorLink.concat(authLink.concat(httpLink)),
  typeDefs,
});

export default client;
