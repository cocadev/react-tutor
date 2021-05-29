import { CourseModel, LessonModel, MicroLessonModel } from '../ts-types/content';

type Element = MicroLessonModel | LessonModel | CourseModel;

export const sortByDates = (order: 1 | -1 = -1) => (el1: Element, el2: Element) => {
  const date1 = new Date(el1.last_updated_at || el1.created_at).getTime();
  const date2 = new Date(el2.last_updated_at || el2.created_at).getTime();

  if (date1 < date2) {
    return -1 * order;
  }
  if (date1 > date2) {
    return 1 * order;
  }
  return 0;
};
