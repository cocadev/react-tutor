import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { BRAND } from '../constants/general';
import { Errors, Title } from '../common';

const NotFound = () => {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.statusCode = 404;
        }
        return (
          <Fragment>
            <Title description={'Page was not found'} title={`Page not found | ${BRAND.name}`} />
            <Errors.Wrapper title={'Page not found'} />
          </Fragment>
        );
      }}
    />
  );
};

export default NotFound;
