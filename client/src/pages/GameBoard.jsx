import InstructionsModal from "../components/InstructionsModal";
import MyScoresModal from "../components/MyScoresModal";
import LeaderBoardModal from "../components/LeaderBoardModal";
import Button from "react-bootstrap/Button";
import "../assets/style/GameBoard.css";
import { useState } from "react";
const initial = [
  [0, 5, 0, 9, 0, 0, 0, 0, 0],
  [8, 0, 0, 0, 4, 0, 3, 0, 7],
  [0, 0, 0, 2, 8, 0, 1, 9, 0],
  [5, 3, 8, 6, 0, 7, 9, 4, 0],
  [0, 2, 0, 3, 0, 1, 0, 0, 0],
  [1, 0, 9, 8, 0, 4, 6, 2, 3],
  [9, 0, 7, 4, 0, 0, 0, 0, 0],
  [0, 4, 5, 0, 0, 0, 2, 0, 9],
  [0, 0, 0, 0, 3, 0, 0, 7, 0],
];
export default function Game() {
  const [sudokuArr, setSudokuArr] = useState(getDeepCopy(initial));
  function getDeepCopy(arr) {
    return JSON.parse(JSON.stringify(arr));
  }
  function onInputChange(e, row, col) {
    var val = parseInt(e.target.value) || 0,
      grid = getDeepCopy(sudokuArr);
    if (val === 0 || (val >= 1 && val <= 9)) {
      grid[row][col] = val;
    }
  }
  return (
    <div className="background">
      <div className="text-center">
        {/* <h1 className="mt-4">Sudoku Puzzle</h1> */}
      </div>
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
              <button className="level">
                <label className="mx-2" htmlFor="difficulty">
                  Difficulty Level:
                </label>
                <select className="choices" name="difficulty" id="difficulty">
                  <option className="choices" value="easy38">
                    Easy
                  </option>
                  <option className="choices" value="medium26">
                    Medium
                  </option>
                  <option className="choices" value="hard24">
                    Hard
                  </option>
                </select>
              </button>
              <div className="signInContainer">
                <button className="signInArea">
                  <h6 className="signInToSave">Sign in to save scores!</h6>
                </button>
                  <button className="signIn">Sign In</button>
              </div>
            </div>
            <div className="game-header">
              <h3>Sudoku</h3>
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
                                  sudokuArr[row][col] === 0
                                    ? ""
                                    : sudokuArr[row][col]
                                }
                                className="cell-input"
                                disabled={initial[row][col] != 0}
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
                <button className="checkButton">Check</button>
                <button className="solveButton">Solve</button>
                <button className="resetButton">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
