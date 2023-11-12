const typeDefs = `
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    thoughts: [Thought]
    gameStat: [GameStat]
  }

  type Auth {
    token: ID!
    user: User
  }

  type GameStat {
    score: Int!
    difficulty: String!
  }

  type Thought {
    thoughtText: String!
    thoughtAuthor: String!
  }

  type Query {
    me: [User]
    getThought(thoughtId: ID!): Thought
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addThought(userId: ID!, thoughtAuthor: String!, thoughtText: String! ): User
    addGameStat(userId: ID!, score: Int!, difficulty: String!): User
  }
`;

module.exports = typeDefs;
