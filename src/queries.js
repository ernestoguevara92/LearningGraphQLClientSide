import { gql } from '@apollo/client';

export const GET_CONTACTS = gql`
    {
        contacts {
            id
            firstName
            lastName
        }
    }
`