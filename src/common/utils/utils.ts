import { Nullable } from '../../ts-types/base';
import { MicroLessonModel, TagModel } from '../../ts-types/content';
import isURL from 'validator/lib/isURL';

class UtilService {
  static CheckContentType(content: string) {
    return /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|v=|\?v=)([^#]*).*/.test(content);
  }

  static getVideo(microlessons?: Nullable<MicroLessonModel[]>) {
    const videos = microlessons?.filter(item => isURL(`${item?.content?.data}`));
    if (videos?.length ?? -1 > 0) {
      return videos?.[0]?.content?.data;
    }
    return null;
  }

  static DateFormat(d: number) {
    function withZero(date: number) {
      if (date < 10) {
        return '0' + date;
      } else {
        return date;
      }
    }
    if (!d) {
      return false;
    }
    return (
      withZero(new Date(d).getDate()) + '-' + withZero(new Date(d).getMonth() + 1) + '-' + new Date(d).getFullYear()
    );
  }

  static getTagText(id: string, list: TagModel[]) {
    const selectedTag = list.find(item => item._id === id);
    if (selectedTag) {
      return selectedTag.text;
    }
    return '';
  }
}

export default UtilService;
