const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    GameStats: [GameStat]
    GameStat(_id: String!): [GameStat]
  }
  type GameStat {
    _id: ID!
    user: User!
    score: Int!
    createdAt: String!
    difficulty: String!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addGameStat(user: String!, score: Int!, difficulty: String!): Auth
  }
`;

module.exports = typeDefs;
