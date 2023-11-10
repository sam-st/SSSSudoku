const { ObjectId } = require("mongodb")

const userData = [
	{
		_id: new ObjectId(),
    username: "steph1",
    email: "steph@sudoku.com",
    password: "steph1"
	},
	{
		_id:  new ObjectId(),
    username: "samwill2",
    email: "samwill@sudoku.com",
    password: "samwill2"
	},
	{
		_id: new ObjectId(),
    username: "samstei3",
    email: "samstei@sudoku.com",
    password: "samstei3"
	},
	{
		_id: new ObjectId(),
    username: "johndoe4",
    email: "saikou@sudoku.com",
    password: "johndoe4"
	}
];
const gameStatsData = [
  {
    _id: new ObjectId(),
    user: userData[0]._id,
    score: 100,
    createdAt: new Date().toISOString(),
    difficulty: 'easy'
  },
  {
    _id: new ObjectId(),
    user: userData[1]._id,
    score: 130,
    createdAt: new Date().toISOString(),
    difficulty: 'medium'
  },
  {
    _id: new ObjectId(),
    user: userData[2]._id,
    score: 150,
    createdAt: new Date().toISOString(),
    difficulty: 'hard'
  },
  {
    _id: new ObjectId(),
    user: userData[3]._id,
    score: 200,
    createdAt: new Date().toISOString(),
    difficulty: 'medium'
  },
]
module.exports = { userData, gameStatsData };