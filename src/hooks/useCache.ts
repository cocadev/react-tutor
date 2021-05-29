import { useCallback } from 'react';
import { GET_LESSONS_QUERY } from '../features/lessons/gql/queries';
import { GET_MICRO_LESSONS_QUERY } from '../features/micro-lessons/gql/queries';
import { isLoggedInVar, clearAuthVars } from '../gql/cache';
import { ApolloCache, useReactiveVar } from '@apollo/client';
import { Query } from '../ts-types/content';

export default function useCache() {
  const onLoggedIn = useCallback(() => {
    isLoggedInVar(true);
  }, []);

  const getCachedLessons = <T>(cache: ApolloCache<T>) =>
    cache.readQuery<{ getLessonsCreatedByUser: Query['getLessonsCreatedByUser'] }>({
      query: GET_LESSONS_QUERY,
    });

  const getCachedMicroLessons = <T>(cache: ApolloCache<T>) =>
    cache.readQuery<{ getMicroLessonsCreatedByUser: Query['getMicroLessonsCreatedByUser'] }>({
      query: GET_MICRO_LESSONS_QUERY,
    });

  return {
    isLoggedIn: useReactiveVar(isLoggedInVar),
    onLoggedIn,
    onClearAuth: clearAuthVars,
    getCachedLessons,
    getCachedMicroLessons,
  };
}
