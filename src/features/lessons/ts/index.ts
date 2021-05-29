import { LessonModel } from '../../../ts-types/content';

export type LessonData = Pick<LessonModel, 'title' | 'description'>;
