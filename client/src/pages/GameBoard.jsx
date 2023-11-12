import InstructionsModal from "../components/InstructionsModal";
import MyScoresModal from "../components/MyScoresModal";
import "../style.css";
import Auth from '../utils/auth';

// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Success from "../components/Success";
import Confetti from 'react-confetti';

import Button from "react-bootstrap/Button";
import "../assets/style/GameBoard.css";
import { useState, useEffect } from "react";
import "../assets/style/Timer.css";
import easyGames from "../puzzles/easy_sudoku.json";
import medGames from "../puzzles/medium_sudoku.json";
import hardGames from "../puzzles/hard_sudoku.json";
import difficulty from "../pages/DifficultyLevel";
import Modal from 'react-bootstrap/Modal';
import "../assets/style/Modal.css";

import React from "react";
import { useStopwatch } from "react-timer-hook";
import Comment from '../components/Comment';

let solvedArray = [];
let unsolvedArray = [];
let usergrid = [];
let gameArray = [];
let initArr = [];
let randomIndex;
let level = '';

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
  // const [lgshow, setlgShow] = useState(false);
  // const handleClose = () => setlgShow(false);
  // const handleShow = () => setlgShow(true);
  const [lgShow, setWinnerShow] = useState(false);
  const [smShow, setLoserShow] = useState(false);


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
    // console.log(event.target.value);
  }
  const handleClick = () => {
    setUpdated(comment);
    console.log(comment);
    let userComment = comment;

  };

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
    if (difficultyLevel === "easy") {
      setSudokuArr(easy());
      solvedArray = easyGames[randomIndex].solved;
      unsolvedArray = easyGames[randomIndex].unsolved;
      return 'easy'
    } else if (level === "medium") {
      setSudokuArr(medium());
      solvedArray = medGames[randomIndex].solved;
      unsolvedArray = medGames[randomIndex].unsolved;
      return 'medium'
    } else {
      setSudokuArr(hard());
      solvedArray = hardGames[randomIndex].solved;
      unsolvedArray = hardGames[randomIndex].unsolved;
      return 'hard'
    }
  }

  function resetSudoku(randomIndex, solvedArray, unsolvedArray) {
    setSudokuArr(unsolvedArray);
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


  function calculateScore(level) {
    console.log(level);
  }

  function calculateScore(level, score) {
    if (level === "easy") {
      return score;
    } else if (score === "medium") {
      return score * 1.2;
    } else {
      return score * 1.4;
    }
  }

  function handleOnClick(e) {
    level = difficultyLevelRecorded(e);
    onDifficultyChange(level);
  }

  function difficultyLevelRecorded(e) {
    level = e.target.value;
    console.log(level);

    // console.log(level);
    if (level === "easy") {
      return 'easy';
    } else if (level === "medium") {
      return 'medium';
    } else if (level === 'null') {
      return 'null';
    }
    else {
      return 'hard';
    }
  }

  function checkSudoku({ seconds }, { minutes }, solvedArray, usergrid) {
    // console.log(solvedArray);
    // console.log(level);
    // console.log(`${minutes}:${seconds}`);
    let score = 1800 - (minutes * 60 + seconds);
    calculateScore(level, score);
    console.log(score);
    for (let x = 0; x < solvedArray.length; x++) {
      for (let y = 0; y < usergrid.length; y++) {
        if (solvedArray[x][y] !== usergrid[x][y]) {
          setLoserShow(true)
          return false;
        }
      }
    }
    setWinnerShow(true)
    return true;
  }

  // function handlemodal({ seconds }, { minutes }, solvedArray, usergrid, {
    // pause }){
    // checkSudoku({ seconds }, { minutes }, solvedArray, usergrid, {
      // pause,
    // })
    
  // }
  function MyStopwatch() {
    const { seconds, minutes, isRunning, start, pause } = useStopwatch({
      autoStart: true,
    });
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "40px" }}>
          <h4 className="invisible">
            <span>{minutes}</span> minutes <span>{seconds}</span> seconds
          </h4>
        </div>
        <button className="btn btn-warning level">
          <label className="mx-1" for="difficulty">
            Difficulty Level:
          </label>

          <select
            className="choices"
            onChange={(e) => handleOnClick(e)}
            name="difficulty" id="difficulty">
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
          className="btn btn-warning level"
          onClick={(e) =>
            checkSudoku({ seconds }, { minutes }, solvedArray, usergrid, {
              pause,
            })
          }
        >
          Finished
        </button>
        <button
          className="btn btn-warning level"
          onClick={(e) => resetSudoku(randomIndex, solvedArray, unsolvedArray)}
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
              </div>
            </div>
             <div className="position-absolute top-0 start-0 mx-3 mt-3"> 
                <MyScoresModal />
                <InstructionsModal />
              
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
          <Modal.Title id="example-modal-sizes-title-lg" className="text-black fs-1">
Congratulations! Your Score: {}      </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div class="position-absolute top-50 start-50 translate-middle w-100">

              {/* <div className='text-center mb-5'>

<h1 className='fs-1 text-black '>Congratulations!!!</h1>
<h3 className='text-black fs-3'>You finished the game! </h3>

</div> */}
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
 ) : (  <a href="/Login"> <button
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
            <div class="position-absolute bottom-0 start-00 translate-middle-x">
<Confetti
  width={window.innerWidth}
  height={window.innerHeight}
  numberOfPieces={600}
/>
             
            </div>
          </div>
        </Modal.Body>      </Modal>
    </>

    <Modal
        size="sm"
        show={smShow}
        onHide={() => setLoserShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" className="text-black fs-1">
Try Again!          </Modal.Title>
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
    

    <a href='/game'>
      <button class="btn btn-warning mx-1" onClick={(e) => resetSudoku(randomIndex, solvedArray, unsolvedArray)} type="button">Try Again</button>    
            </a>

           
   <a href='/home'>
    <button class="btn btn-warning mx-1" type="button">Home</button>
    </a> 
    

  </div>
              </div>
            </div>
            <div class="position-absolute bottom-0 start-00 translate-middle-x">
{/* <Confetti
  width={window.innerWidth}
  height={window.innerHeight}
  numberOfPieces={600}
/> */}
             
            </div>
          </div>
        </Modal.Body>      </Modal>
    
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
