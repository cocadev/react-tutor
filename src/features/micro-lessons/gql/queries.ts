import { gql } from '@apollo/client';

const GetMicroLesson = gql`
  query getMicroLesson($id: String!) {
    getMicroLesson(id: $id) {
      _id
      created_at
      created_by
      last_updated_at
      last_updated_by
      deleted
      org_id
      metadata
      likes
      subscribers
      title
      content {
        description
        data
        type
        metadata
      }
      emotions
      published
      published_at
      tags {
        _id
        created_at
        created_by
        last_updated_at
        last_updated_by
        deleted
        org_id
        metadata
        likes
        subscribers
        text
        system_inferred
      }
    }
  }
`;

const GetMicroLessonContent = gql`
  query getMicroLessonContent($id: String!) {
    getMicroLessonContent(id: $id) {
      description
      data
      type
      metadata
    }
  }
`;

const GetMicroLessons = gql`
  query {
    getMicroLessonsCreatedByUser {
      _id
      created_at
      created_by
      last_updated_at
      last_updated_by
      deleted
      org_id
      metadata
      likes
      subscribers
      title
      content {
        description
        data
        type
        metadata
      }
      emotions
      is_published
      published_at
      tags {
        _id
        text
      }
      questions {
        _id
        text
        micro_lesson_id
        type
        tags {
          _id
        }
        answers {
          text
          id
          image_url
          weight
        }
      }
    }
  }
`;

const GetMicroLessonTags = gql`
  query getMicroLessonTags($id: String!) {
    getMicroLessonTags(id: $id) {
      _id
      created_at
      created_by
      last_updated_at
      last_updated_by
      deleted
      org_id
      metadata
      likes
      subscribers
      text
      system_inferred
    }
  }
`;

export const GET_MICRO_LESSONS_QUERY = gql`
  query {
    getMicroLessonsCreatedByUser {
      _id
      created_at
      last_updated_at
      metadata
      title
      content {
        description
        data
        type
        metadata
      }
      tags {
        _id
        text
      }
      questions {
        _id
        text
        micro_lesson_id
        type
        tags {
          _id
        }
        answers {
          text
          id
          image_url
          weight
        }
      }
    }
  }
`;

export { GetMicroLesson, GetMicroLessons, GetMicroLessonTags, GetMicroLessonContent };
