import InstructionsModal from "../components/InstructionsModal";
import MyScoresModal from "../components/MyScoresModal";
import LeaderBoardModal from "../components/LeaderBoardModal";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Success from '../components/Success';
import Button from 'react-bootstrap/Button';
import "../assets/style/GameBoard.css";
import { useState, useEffect } from 'react';
import "../assets/style/Timer.css";
import easyGames from '../puzzles/easy_sudoku.json';
import medGames from '../puzzles/medium_sudoku.json';
import hardGames from '../puzzles/hard_sudoku.json';
import difficulty from "../pages/DifficultyLevel";
import { useLocation } from 'react-router-dom';
import { Alert } from "react-bootstrap";
import React from 'react';
import { useStopwatch } from 'react-timer-hook';

let gameArray = [];
let randomIndex = 0;
let solvedArray = [];
let unsolvedArray = [];
let usergrid = [];


const initial =
  [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1]
  ]

  
        

  let gameArray = [];
  let initArr = [];
  let randomIndex;

  export default function Game() {
    const [sudokuArr, setSudokuArr] = useState(getDeepCopy(initial));
    
    function getDeepCopy(arr) {
      return JSON.parse(JSON.stringify(arr));
    }
    function easy() {
      randomIndex = Math.floor(Math.random() * easyGames.length)
      gameArray = (easyGames[randomIndex]);
      initArr = (easyGames[randomIndex].unsolved);
      return gameArray.unsolved
    }
    function medium() {
      randomIndex = Math.floor(Math.random() * medGames.length)
      gameArray = (medGames[randomIndex]);
      initArr = (medGames[randomIndex].unsolved);
      return gameArray.unsolved
    }
    function hard() {
      randomIndex = Math.floor(Math.random() * hardGames.length)
      gameArray = (hardGames[randomIndex]);
      initArr = (hardGames[randomIndex].unsolved);
      return gameArray.unsolved
    }
    
    function onDifficultyChange(e){
      
      const difficultyLevel = e.target.value;
      if (difficultyLevel === "easy"){
        setSudokuArr(easy());
      }
      else if (difficultyLevel === "medium"){
        setSudokuArr(medium());
      }
      else{
        setSudokuArr(hard());
      }
    }
    
    function resetSudoku(randomIndex, solvedArray, unsolvedArray) {
      console.log(randomIndex);
      setSudokuArr(unsolvedArray);
    }
    function onInputChange(e, row, col, grid) {
      var val = parseInt(e.target.value) || -1, grid = getDeepCopy(sudokuArr);
      if (val === -1 || val >= 1 && val <= 9) {
        grid[row][col] = val;
      }
    
      setSudokuArr(grid);
      usergrid = grid;
      console.log(usergrid);
    }
      
    function checkSudoku({ seconds }, { minutes }, solvedArray, usergrid) {
      console.log(solvedArray);
      // console.log(level);
      console.log(`${minutes}:${seconds}`);
      let score = 1800 - ((minutes * 60) + seconds);
      console.log(score);
      for (let x = 0; x < solvedArray.length; x++) {
        for (let y = 0; y < usergrid.length; y++) {
         if (solvedArray[x][y] !== usergrid[x][y]) {
            alert(`Success! You scored: ${score}`);
           return false;
         }
        }
      }
     alert(`Success! You scored: ${score}`);
     return true;
    }
  return (
    <div className="background">
           <div >
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
                  <button className="signIn">Sign In</button>
                </button>
              </div>
            </div>
            <div className="game-header">
              <h3 className='mt-3'>Sudoku</h3>
              <table>
                <tbody>
                  {
                    [0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rIndex) => {
                      return <tr key={rIndex} className={(row + 1) % 3 === -1 ? "bBorder" : ''}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cIndex) => {
                          return <td key={rIndex + cIndex} className={(col + 1) % 3 === 0 ? "rBorder" : ''}>
                            <input onChange={(e) => onInputChange(e, row, col)} value={sudokuArr[row][col] === -1 ? '' : sudokuArr[row][col]} className="cell-input" disabled={sudokuArr[row][col] != -1 && initArr[row][col] === sudokuArr[row][col]} />
                          </td>
                        })}

                      </tr>
                    })
                  }
                </tbody>
              </table>
              <div className="buttonContainer">
                <div>
        <MyStopwatch />
      </div>
                {/* <button className="checkButton" onClick={() => checkSudoku(solvedArray, usergrid)}>Check</button>
                <button className="resetButton" onClick={resetSudoku}>Reset</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
