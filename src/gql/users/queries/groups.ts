import { gql } from '@apollo/client';

export const groups = gql`
    query groups {
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
    }
}
`;

// {}
