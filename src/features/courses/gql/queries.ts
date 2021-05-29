import { gql } from '@apollo/client';

const GET_COURSES_QUERY = gql`
  query {
    getCoursesCreatedByUser {
      _id
      metadata
      title
      description
      image_url
      start_date
      end_date
      created_at
      navigation
    }
  }
`;

const GetCourse = gql`
  query getCourse($id: String!) {
    getCourse(id: $id) {
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
      rating
      total_rating
      users_rated
      description
      image_url
      start_date
      end_date
      is_published
      navigation
      published_at
      lessons {
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
        description
        goal
        url
        published
        published_at
        show_stats_after_answer
        allow_ab_test
        flow_controller
        micro_lessons {
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

const GetCourseRate = gql`
  query getCourseRate($id: String!) {
    getCourseRate(id: $id)
  }
`;

export { GET_COURSES_QUERY, GetCourse, GetCourseRate };
