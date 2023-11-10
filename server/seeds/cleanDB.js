const User = require('../models/User');
const GameStat = require('../models/GameStat');

const cleanDB = async () => {
    try {
        await User.deleteMany({});
        console.log('User collection cleared!');
        await GameStat.deleteMany({});
        console.log('GameStat collection cleared!');
    } catch (error) {
        console.error('Error clearing collections:', error);
    }
};

module.exports = cleanDB;