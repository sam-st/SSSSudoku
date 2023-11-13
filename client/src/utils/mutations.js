import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {

      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_GAMESTAT = gql`
mutation AddGameStat($userId: ID!, $score: Int!, $difficulty: String!) {
  addGameStat(userId: $userId, score: $score, difficulty: $difficulty) {
    _id
    username
    email
    password
    gameStat {
      score
      difficulty
    }
  }
}
`;

export const ADD_THOUGHT = gql `
mutation Mutation($userId: ID!, $thoughtAuthor: String!, $thoughtText: String!) {
  addThought(userId: $userId, thoughtAuthor: $thoughtAuthor, thoughtText: $thoughtText) {
    _id
    username
    email
    password
    thoughts {
      thoughtText
      thoughtAuthor
    }
  }
}
`;


