import { gql } from '@apollo/client';

const AddUserToGroup = gql`
  mutation addUserToGroup($updateUserGroupInput: AddUserToGroupInput!) {
    addUserToGroup(updateUserGroupInput: $updateUserGroupInput) {
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

const CreateUserGroup = gql`
  mutation createUserGroup($createUserGroupInput: CreateUserGroupInput!) {
    createUserGroup(createUserGroupInput: $createUserGroupInput) {
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
  }
`;

const DeleteUserGroup = gql`
  mutation deleteUserGroup($user_id: String!, $id: String!) {
    deleteUserGroup(user_id: $user_id, id: $id)
  }
`;

const RemoveUserFromGroup = gql`
  mutation removeUserFromGroup($group_id: String!, $user_id: String!) {
    removeUserFromGroup(group_id: $group_id, user_id: $user_id) {
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

const UpdateUserGroup = gql`
  mutation updateUserGroup($updateUserGroupInput: UpdateUserGroupInput!) {
    updateUserGroup(updateUserGroupInput: $updateUserGroupInput) {
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
  }
`;

export { AddUserToGroup, CreateUserGroup, DeleteUserGroup, RemoveUserFromGroup, UpdateUserGroup };
