const User = require('../models/User');
const GameStat = require('../models/GameStat');
const Thought = require('../models/Thought');

const cleanDB = async () => {
    try {
        await User.deleteMany({});
        console.log('User collection cleared!');
        await GameStat.deleteMany({});
        console.log('GameStat collection cleared!');
        await Thought.deleteMany({});
        console.log('Thoughts collection cleared!');

    } catch (error) {
        console.error('Error clearing collections:', error);
    }
};

module.exports = cleanDB;