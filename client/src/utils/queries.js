import { gql } from '@apollo/client';

export const QUERY_me = gql`
  query user {
    user {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;


