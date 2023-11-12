import InstructionsModal from "../components/InstructionsModal";
import MyScoresModal from "../components/MyScoresModal";
import LeaderBoardModal from "../components/LeaderBoardModal";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Success from "../components/Success";
// import Button from "react-bootstrap/Button";
import "../assets/style/GameBoard.css";
import { useState, useEffect } from "react";
import "../assets/style/Timer.css";
import easyGames from "../puzzles/easy_sudoku.json";
import medGames from "../puzzles/medium_sudoku.json";
import hardGames from "../puzzles/hard_sudoku.json";
// import difficulty from "../pages/DifficultyLevel";
// import { useLocation } from "react-router-dom";
// import { Alert } from "react-bootstrap";
import React from "react";
import { useStopwatch } from "react-timer-hook";

let solvedArray = [];
let usergrid = [];
let gameArray = [];
let initArr = [];
let randomIndex;
let level ='';

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
  const [sudokuArr, setSudokuArr] = useState(getDeepCopy(initial));

  function getDeepCopy(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  function easy() {
    randomIndex = Math.floor(Math.random() * easyGames.length);
    gameArray = easyGames[randomIndex];
    initArr = easyGames[randomIndex].unsolved;
    return gameArray.unsolved;
  }

  function medium() {
    randomIndex = Math.floor(Math.random() * medGames.length);
    gameArray = medGames[randomIndex];
    initArr = medGames[randomIndex].unsolved;
    return gameArray.unsolved;
  }

  function hard() {
    randomIndex = Math.floor(Math.random() * hardGames.length);
    gameArray = hardGames[randomIndex];
    initArr = hardGames[randomIndex].unsolved;
    return gameArray.unsolved;
  }

  function onDifficultyChange(difficultyLevel) {
    level = difficultyLevel;
    if (difficultyLevel === "easy") {
      setSudokuArr(easy());
      solvedArray = easyGames[randomIndex].solved;
    } else if (difficultyLevel === "medium") {
      setSudokuArr(medium());
      solvedArray = medGames[randomIndex].solved;
    } else {
      setSudokuArr(hard());
      solvedArray = hardGames[randomIndex].solved;
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
      console.log(level);
      return score;
    } else if (level === "medium") {
      console.log(level);
      return score * 1.2;
    } else {
      console.log(level);
      return score * 1.4;
    }
  }

  function checkSudoku({ seconds }, { minutes }, solvedArray, usergrid) {
    // console.log(level);
    let score = 1800 - (minutes * 60 + seconds);
    score = calculateScore(level, score);
    console.log(score);
    for (let x = 0; x < solvedArray.length; x++) {
      for (let y = 0; y < usergrid.length; y++) {
        if (solvedArray[x][y] !== usergrid[x][y]) {
          alert(`YOU'RE BAD`);
          return false;
        }
      }
    }
    alert(`Success! You scored: ${score}`);
    return true;
  }

  function handleOnClick(e) {
    difficultyLevelRecorded(e);
    onDifficultyChange(e.target.value);
  }

  function difficultyLevelRecorded(e) {
    level = e.target.value;
    // console.log(level);
    if (level === "easy") {
      console.log(level);
      easy();

    } else if (level === "medium") {
      console.log(level);
      medium();

    } else {
      console.log(level);
      hard();
    }
  }

  function MyStopwatch() {
    const { seconds, minutes, isRunning, start, pause } = useStopwatch({
      autoStart: true,
    });
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "40px" }}>
          <h4>
            <span>{minutes}</span> minutes <span>{seconds}</span> seconds
          </h4>
        </div>
        <button className="level">
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
          className="level"
          onClick={(e) =>
            checkSudoku({ seconds }, { minutes }, solvedArray, usergrid, {
              pause,
            })
          }
        >
          Finished
        </button>
        <button
          className="level"
          onClick={(e) => resetSudoku(initArr)}
        >
          Try Again
        </button>
      </div>
    );
  }
  return (
    <div className="background">
      <div>
        <div className="position-relative">
          <div className="game">
            <div className="position-relative">
              <div className="modalButtons position-absolute top-0 end-0">
                <MyScoresModal />
                <InstructionsModal />
                <LeaderBoardModal />
              </div>
            </div>
            <div className="position-absolute top-0 start-0">
              <div className="signInContainer">
                <button className="signInArea mt-2">
                  <h6 className="signInToSave">Sign in to save scores!</h6>
                  <a href="/Login">
                    <button className="signIn">Sign In</button>
                  </a>
                  <div>
                  </div>
                </button>
              </div>
            </div>
            <div className="game-header">
              <h3 className="mt-2">Sudoku</h3>
              <table>
                <tbody>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rIndex) => {
                    return (
                      <tr
                        key={rIndex}
                        className={(row + 1) % 3 === -1 ? "bBorder" : ""}
                      >
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cIndex) => {
                          return (
                            <td
                              key={rIndex + cIndex}
                              className={(col + 1) % 3 === -1 ? "rBorder" : ""}
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
                <div>
                  <MyStopwatch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
