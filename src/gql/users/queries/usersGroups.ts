import { gql } from '@apollo/client';

export const usersGroups = gql`
    query usersGroups ($id: String!) {
        usersGroups (id: $id) {
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
}
`;

// {
//     "id": ""
//   }
