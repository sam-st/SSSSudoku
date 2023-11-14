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
}`

export const QUERY_meThoughts = gql`
query Query {
  me {
    _id
    username
    thoughts {
      thoughtText
      thoughtAuthor
    }
  }
}
`;

export const QUERY_meGameStat = gql`
query Query {
  me {
    _id
    username
    gameStat {
      score
      difficulty
    }
  }
}`

export const QUERY_meOnly = gql`
query Query($userId: ID!) {
  getGameStat(userId: $userId) {
    score
    difficulty
  }
}
`