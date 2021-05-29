import { gql } from '@apollo/client';

export const organization = gql`
    query organization ($id: String!) {
        organization (id: $id)
    }
}
`;

// {
//     "id": ""
//   }
