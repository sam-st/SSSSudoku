import { gql } from '@apollo/client';

// Query to get user data
export const QUERY_me = gql`
query Query {
  me {
    _id
    username
    email
    password
    thoughts {
      thoughtText
      thoughtAuthor
    }
    gameStat {
      score
      difficulty
    }
  }
}
`;