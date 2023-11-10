const db = require('../config/connection');
const { User, GameStat } = require('../models');
const cleanDB = require('./cleanDB');

const {userData, gameStatsData} = require('./userData');

db.once('open', async () => {
	try{
	await cleanDB('User');
	await User.insertMany(userData);
	await GameStat.insertMany(gameStatsData);

	console.log('Users and Game Stats seeded!');
	process.exit(0);
} catch (error) {
	console.error('Error seeding users:', error);
	process.exit(1);
}
});