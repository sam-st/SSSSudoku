import InstructionsModal from "../components/InstructionsModal";
import MyScoresModal from "../components/MyScoresModal";
import "../style.css";
import Auth from '../utils/auth';
import Confetti from 'react-confetti';
import "../assets/style/GameBoard.css";
import { useState, useEffect } from "react";
import "../assets/style/Timer.css";
import easyGames from "../puzzles/easy_sudoku.json";
import medGames from "../puzzles/medium_sudoku.json";
import hardGames from "../puzzles/hard_sudoku.json";
import Modal from 'react-bootstrap/Modal';
import "../assets/style/Modal.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useStopwatch } from "react-timer-hook";
import Comment from '../components/CommentModal';
import LeaderBoard from '../components/LeaderBoardModal';
import demo from "../puzzles/demo.json";
let solvedArray = [];
let usergrid = [];
let gameArray = [];
let initArr = [];
let randomIndex;
let level = "";
let score = 0;
let startingTime = 0;
let endingTime = 0;
let difference = 0;
let userScore = 0;
let scoreVar = 0;
const initial = [
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
];

export default function Game() {
  const [lgShow, setWinnerShow] = useState(false);
  const [smShow, setLoserShow] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("completed") === "true") {
      setWinnerShow(false);
      localStorage.setItem("completed", false);
    }
  }, [])

  const button2Style = {
    margin: "0 10px", // Add margin between buttons
    width: "180px",
    border: 'none',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer',
    borderRadius: '16px'
  };
  const [comment, setComment] = useState('');
  const [updated, setUpdated] = useState(comment);

  const handleChange = (event) => {
    setComment(event.target.value);
  }
  const handleClick = () => {
    userScore = localStorage.getItem("score");
    setUpdated(comment);
    localStorage.setItem("userComment", JSON.stringify(userComment));
    setWinnerShow(false)
  }
  const [sudokuArr, setSudokuArr] = useState(getDeepCopy(initial));
  const navigate = useNavigate()
  function getDeepCopy(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  function saveFinalScore() {
    localStorage.setItem("score", score);
    localStorage.setItem("completed", true);
    navigate('/login')
  }

  function chooseDifficulty(difficultyLevel) {
    level = difficultyLevel;
    if (difficultyLevel === "easy") {
      randomIndex = Math.floor(Math.random() * easyGames.length);
      gameArray = easyGames[randomIndex];
      initArr = gameArray.unsolved;
      solvedArray = gameArray.solved;
      setSudokuArr(gameArray.unsolved);
    } else if (difficultyLevel === "medium") {
      randomIndex = Math.floor(Math.random() * medGames.length);
      gameArray = medGames[randomIndex];
      initArr = gameArray.unsolved;
      solvedArray = gameArray.solved;
      setSudokuArr(gameArray.unsolved);
    } else if (difficultyLevel === "hard") {
      randomIndex = Math.floor(Math.random() * hardGames.length);
      gameArray = hardGames[randomIndex];
      initArr = gameArray.unsolved;
      solvedArray = gameArray.solved;
      setSudokuArr(gameArray.unsolved);
    } else if (difficultyLevel === "demo") {
      randomIndex = Math.floor(Math.random() * demo.length);
      gameArray = demo[randomIndex];
      initArr = gameArray.unsolved;
      solvedArray = gameArray.solved;
      setSudokuArr(gameArray.unsolved);
    }
  }

  function resetSudoku(initArr) {
    setSudokuArr(initArr);
  }

  function onInputChange(e, row, col, grid) {
    var val = parseInt(e.target.value) || -1,
      grid = getDeepCopy(sudokuArr);
    if (val === -1 || (val >= 1 && val <= 9)) {
      grid[row][col] = val;
    }
    setSudokuArr(grid);
    usergrid = grid;
  }

  function calculateScore(level, score) {
    if (level === "easy") {
      return score;
    } else if (level === "medium") {
      return score * 1.2;
    } else if (level === "demo") {
      return score;
    }
    else {
      return score * 1.4;
    }
  }

  function checkSudoku(
    solvedArray,
    usergrid,
    initArr
  ) {
    endTime();
    difference = Math.ceil((endingTime - startingTime) / 1000);

    calculateTime();
    var scoreVar = 1800 - difference;
    scoreVar = calculateScore(level, scoreVar);
    setScore(scoreVar);

    if (usergrid.length !== 9) {
    }

    if (usergrid.length == 9) {
      for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
          if (solvedArray[x][y] !== usergrid[x][y]) {
            setLoserShow(true)
            return false;
          }
        }
        setWinnerShow(true)
        return true;
      }
    }
  }


  function startTime() {
    const d = new Date();
    startingTime = d.getTime();
  }

  function endTime() {
    const d = new Date();
    endingTime = d.getTime();
  }

  function calculateTime() {
  }
  function handleOnClick(e) {
    chooseDifficulty(e.target.value);
    startTime();
  }

  return (
    <div className="background">
      <div>
        <div className="position-relative">
          <div className="game">
            <div className="position-relative">
              <div className="modalButtons position-absolute top-0 end-0">
              </div>
            </div>
            <div className="position-absolute top-0 start-0 mx-3 mt-3">
              <MyScoresModal />
              <Comment />
              <LeaderBoard />
              <InstructionsModal />
              <a href="/home"><button className="btn btn-warning scoresModal">Home</button></a>

            </div>
            <div className="game-header">
              <h3 className="mt-2 fs-1">Sudoku</h3>
              <table>
                <tbody>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rIndex) => {
                    return (
                      <tr
                        key={rIndex}
                        className={(row + 1) % 3 === 0 ? "bBorder" : ""}
                      >
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cIndex) => {
                          return (
                            <td
                              key={rIndex + cIndex}
                              className={(col + 1) % 3 === 0 ? "rBorder" : ""}
                            >
                              <input
                                onChange={(e) => onInputChange(e, row, col)}
                                value={
                                  sudokuArr[row][col] === -1
                                    ? ""
                                    : sudokuArr[row][col]
                                }
                                className="cell-input"
                                disabled={
                                  sudokuArr[row][col] !== -1 &&
                                  initArr[row][col] === sudokuArr[row][col]
                                }
                              />
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="buttonContainer">
                <>

                  <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setWinnerShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-lg" className="text-black fs-2">Congratulations! Your Score: {score} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div>
                        <div class="position-absolute top-50 start-50 translate-middle w-100">
                          <div className='mx-2 input-group mb-3'>
                            <input className='form-control'
                              type="text"
                              placeholder="Type you comment here!"
                              id="message"
                              name="message"
                              onChange={handleChange}
                              value={comment}
                            />
                            <div class="input-group-append mx-2">

                              {Auth.loggedIn() ? (
                                <button className="btn btn-warning mx-1" onClick={handleClick} type="button">Save</button>
                              ) : (<a href="#"> <button onClick={saveFinalScore}
                                className="btn btn-warning mx-1">
                                Login
                              </button>
                              </a>)}
                              <a href='/game'>
                                <button class="btn btn-warning mx-1" type="button">Play Again</button>
                              </a>
                              <a href='/home'>
                                <button class="btn btn-warning mx-1" type="button">Home</button>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="position-absolute bottom-0 start-00 translate-middle-x">
                          <Confetti
                            width={window.innerWidth}
                            height={window.innerHeight}
                            numberOfPieces={600}
                            className="position-absolute bottom-0 start-0 translate-middle-xx"
                          />
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </>

                <Modal
                  size="sm"
                  show={smShow}
                  onHide={() => setLoserShow(false)}
                  aria-labelledby="example-modal-sizes-title-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg" className="text-center text-black fs-1"> Try Again!</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div>
                      <div class="position-absolute top-50 start-50 translate-middle w-100">
                        <div className="text-center">

                          <a href='/game'>
                            <button class="btn btn-sm btn-warning m-2" onClick={(e) => resetSudoku(randomIndex, solvedArray, unsolvedArray)} type="button">Try Again</button>
                          </a>

                          <a href='/home'>
                            <button class="btn btn-sm btn-warning m-2" type="button">Home</button>
                          </a>
                        </div>
                      </div>
                      <div class="position-absolute bottom-0 start-00 translate-middle-x">
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
                <div>
                  {/* <MyStopwatch /> */}
                </div>
                <button className="btn btn-warning level">
                  <label className="mx-1" for="difficulty">
                    Difficulty Level:
                  </label>

                  <select
                    className="choices"
                    onChange={(e) => handleOnClick(e)}
                    name="difficulty"
                    id="difficulty"
                  >
                    <option className="choices" value="null"></option>
                    <option className="choices" value="demo">Demo</option>
                    <option className="choices" value="easy">
                      Easy
                    </option>
                    <option className="choices" value="medium">
                      Medium
                    </option>
                    <option className="choices" value="hard">
                      Hard
                    </option>
                  </select>
                </button>
                <button
                  className="btn btn-warning level"
                  onClick={(e) =>
                    checkSudoku(
                      solvedArray,
                      usergrid,
                      initArr,

                    )
                  }
                >
                  Finished
                </button>
                <button className="btn btn-warning level" onClick={(e) => resetSudoku(initArr)}>

                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
