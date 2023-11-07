const { Schema, model, default: mongoose } = require('mongoose');

const gameStatsSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	gamesPlayed: {
		type: Number,
		default: 0,
	},
	gamesWon: {
		type: Number,
		default: 0,
	},
	bestScore: {
		type: Number,
		default: Infinity,
	}
});

const GameStats = model('GameStats', gameStatsSchema);

module.exports = GameStats;
