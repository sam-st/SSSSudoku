const { User, Thought, GameStat } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async () => {
      return User.find({});
    },
    GameStats: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return GameStat.find(params);
    },
    GameStat: async (parent, { gameStatId }) => {
      return GameStat.findOne({ _id: gameStatId });
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
    addGameStat: async (parent, { gameStatId, gameStat }) => {
      const stat = await GameStat.findOneAndUpdate(
        { _id },
        { $addToSet: { gameStat: { gameStatId } } },
        {
          new: true,
          runValidators: true,
        }
      );
      return stat;
      // return GameStat.findOneAndUpdate(
      //   { _id: gameStatId },
      //   {
      //     $addToSet: { gameStat: { gameStat }}
      //   },

      // )
    }
  },
};

module.exports = resolvers;
