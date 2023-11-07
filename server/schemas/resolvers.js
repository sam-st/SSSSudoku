const { User, Thought, GameStats } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async () => {
      return User.find().populate('thoughts');
    },
    GameStats: async () => {
      return GameStats.find();
    },
    GameStat: async (parent, { gameStatId }) => {
      return GameStats.findOne({ _id: gameStatId });
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addStat: async (parent, { gameStatId, gameStats}) => {
      return GameStats.findOneAndUpdate(
        { _id: gameStatId },
        {
          $addToSet: { gameStats: { gameStats }}
        },
        {
          new: true,
          runValidators: true,
        }
      )
    }
  },
};

module.exports = resolvers;
