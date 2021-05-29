/**
 * It is root for store reducer
 */
import { combineReducers } from 'redux';
import microLessonReducer from '../features/micro-lessons/redux/reducer';
import courseReducer from '../features/courses/redux/reducer';
import tagReducer from './Tag/tagReducer';

const rootReducer = combineReducers({
  microLessonReducer,
  courseReducer,
  tagReducer,
});

export default rootReducer;
