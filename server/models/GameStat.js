const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const gameStatSchema = new Schema({
	score: {
		type: Number,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		get: timestamp => dateFormat(timestamp),

	},
	difficulty: {
		type: String,
		required: true,
	}
},
	{
		toJSON: {
			getters: true,
		},
		id: false,
	}
);

const GameStat = model('GameStat', gameStatSchema);

module.exports = GameStat;