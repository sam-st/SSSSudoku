const db = require('../config/connection');
const User = require('../models/User');
const cleanDB = require('./cleanDB');

const userData = require('./userData');

db.once('open', async () => {
	try {
		await cleanDB();

		const username = "master";
		const email = "master@master.com";
		const password = "masterpass";

		await User.create({ username, email, password });

		console.log('Users, Game Stats, and Thoughts are seeded!');
		process.exit(0);
	} catch (error) {
		console.error('Error seeding users:', error);
		process.exit(1);
	}
});