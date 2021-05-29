import { gql } from '@apollo/client';

export const users = gql`
  query users {
    users {
      _id
      created_at
      created_by
      last_updated_at
      last_updated_by
      org_id
      deleted
      first_name
      middle_name
      last_name
      cell_no
      cell_no_verified
      phone
      email
      email_verified
      password
      password_set
      user_type
      roles
      status
      profile_image
      groups {
        _id
        created_at
        created_by
        last_updated_at
        last_updated_by
        org_id
        deleted
        name
        description
      }
      relations {
        father
        mother
        tutors
        students
      }
      languages
      dob
      gender
      title
      residence_address {
        address_line1
        city
        state
        zip
      }
      timezone
    }
  }
`;

// {}
