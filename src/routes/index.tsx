import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { getListMicrolessons } from '../features/micro-lessons/redux/actions';
import { client } from '../gql/client';
import { useAuth } from '../hooks';

import {
  Login,
  Register,
  CreatePassword,
  VerifyEmail,
  Overview,
  NotFound,
  CreateLesson,
  Campaigns,
  Statements,
  Settings,
  Payout,
  CreateCourse,
  Courses,
  UpdateLesson,
  Lessons,
  AddQuestion,
  AddContent,
  MicroDetail,
  MicroLessons,
} from '../pages';
import { Errors, Layout, Loaders } from '../common';
import { IRootReducerState } from '../store/IRootReducer';
import { getListTags } from '../store/Tag/tagActions';
import PrivateRoute from './private-route';
import PublicRoute from './public-route';
import { ROUTES } from '../constants/routes';

const routes = [
  { path: ROUTES.overview, component: Overview },
  { path: ROUTES.microLessons, component: MicroLessons },
  { path: ROUTES.dynamic.microLessons(), component: MicroDetail },
  { path: ROUTES.dynamic.microLessonsAddQuestion(), component: AddQuestion },
  { path: ROUTES.dynamic.microLessonsQuestion(), component: AddQuestion },
  { path: ROUTES.dynamic.microLessonsContent(), component: AddContent },
  { path: ROUTES.addContent, component: AddContent },
  { path: ROUTES.lessons, component: Lessons },
  { path: ROUTES.dynamic.lessons(), component: UpdateLesson },
  { path: ROUTES.createLesson, component: CreateLesson },
  { path: ROUTES.courses, component: Courses },
  { path: ROUTES.dynamic.courses(), component: CreateCourse },
  { path: ROUTES.createCourse, component: CreateCourse },
  { path: ROUTES.campaigns, component: Campaigns },
  { path: ROUTES.statements, component: Statements },
  { path: ROUTES.settings, component: Settings },
  { path: ROUTES.payout, component: Payout },
];

const Routes = () => {
  const { isLoggedIn } = useAuth();
  const { isTagsLoaded } = useSelector((state: IRootReducerState) => state.tagReducer);
  const { isMLLoaded } = useSelector((state: IRootReducerState) => state.microLessonReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn && !isMLLoaded) {
      dispatch(getListMicrolessons(client));
    }
  }, [dispatch, isMLLoaded, isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn && !isTagsLoaded) {
      dispatch(getListTags(client));
    }
  }, [dispatch, isTagsLoaded, isLoggedIn]);

  return (
    <Layout.Root>
      <Errors.Boundary>
        <Suspense fallback={<Loaders.Page />}>
          <Switch>
            <PrivateRoute exact path={ROUTES.main} component={Overview} />
            <PublicRoute exact path={ROUTES.login} component={Login} />
            <PublicRoute exact path={ROUTES.register} component={Register} />
            <PublicRoute exact path={ROUTES.createPassword} component={CreatePassword} />
            <PublicRoute exact path={ROUTES.verifyEmail} component={VerifyEmail} />

            {routes.map(item => (
              <PrivateRoute key={item.path} exact path={item.path} component={item.component} />
            ))}

            <Route path="/*" component={NotFound} />
          </Switch>
        </Suspense>
      </Errors.Boundary>
    </Layout.Root>
  );
};

export default Routes;
