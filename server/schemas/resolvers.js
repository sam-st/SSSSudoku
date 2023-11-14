const { Error } = require('mongoose');
const { User, Thought, GameStat } = require('../models');
// const { findById } = require('../models/User');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async () => {
      return User.find({});
    },
    getGameStat: async (_, { userId }) => {
      try {
        const user = await User.findById(userId);
        if (!user) {
          throw new Error('User not found');
        }
        return user.gameStat || [];
      } catch {
        console.error(error);
        throw new Error('Cant get user game stats')
      }
    },
    // getThought: async (thoughtId) => {
    //   const thought = await Thought.findOne({
    //     where: {
    //       _id: thoughtId
    //     }
    //   });
    //   return thought;
    // }
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
    addGameStat: async (parent, { userId, score, difficulty }) => {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error(`Cant find User`)
      } else {
        user.gameStat.push({ score, createdAt: new Date().toISOString(), difficulty });
        await user.save();
        return user;
      };
    },
    addThought: async (parent, { userId, thoughtText }) => {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error(`Cant find User`);
      } else {
        user.thoughts.push({ thoughtText, thoughtAuthor: userId, createdAt: new Date().toISOString() });
        await user.save();
        return user;
      }
    },
  },
};

module.exports = resolvers;
