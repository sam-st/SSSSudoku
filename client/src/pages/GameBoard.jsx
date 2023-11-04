import InstructionsModal from "../components/InstructionsModal";
import MyScoresModal from "../components/MyScoresModal";
import LeaderBoardModal from "../components/LeaderBoardModal";
import Button from 'react-bootstrap/Button';


export default function Game() {
  return (
    <div>
      <div className="text-center">

        <div class="position-relative">
          <div class="position-absolute top-0 end-0 mt-1">
            <MyScoresModal />
            <InstructionsModal />
            <LeaderBoardModal />
          </div>
          <div class="position-absolute top-0 start-0 mt-1">

            <label className="m-2" for="difficulty">Difficulty Level:</label>
            <select name="difficulty" id="difficulty">
              <option value="easy38">Easy</option>
              <option value="medium26">Medium</option>
              <option value="hard24">Hard</option>
            </select>
          </div>
          <h1 className="mt-4">Sudoku Puzzle</h1>
        </div>
        <div >

          
          <div class="position-relative">
            <table className="position-absolute" width="85%"  border="2">

              <tr class="border border-primary">
                <td className="border border-primary>">3</td>
                <td className="border border-primary>">9</td>
                <td className="border border-primary>">8</td>
                {/* <!-- empty cells filled with non-breaking spaces to give more whitespace --> */}
                <td className="bg-secondary"></td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="bg-secondary"></td>
                <td className="border border-primary>">&nbsp;&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;&nbsp;</td>
              </tr>
              <tr class="border border-primary">
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">2</td>
                <td className="bg-secondary"></td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">8</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="bg-secondary"></td>
                <td className="border border-primary>">3</td>
                <td className="border border-primary>">5</td>
                <td className="border border-primary>">9</td>
              </tr>
              <tr class="border border-primary">
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="bg-secondary"></td>
                <td className="border border-primary>">1</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="bg-secondary"></td>
                <td className="border border-primary>">4</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td className="bg-secondary"></td>
                <td className="bg-secondary"></td>
                <td className="bg-secondary"></td>
                <td className="bg-secondary"></td>
                <td className="bg-secondary"></td>
                <td className="bg-secondary"></td>
                <td className="bg-secondary"></td>
                <td className="bg-secondary"></td>
                <td className="bg-secondary"></td>
                <td className="bg-secondary"></td>
                <td className="bg-secondary"></td>

              </tr>
              <tr class="border border-primary"></tr>
              <tr class="border border-primary"></tr>
              <tr class="border border-primary">
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">4</td>
                <td className="border border-primary>">9</td>
                <td className="bg-secondary"></td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">1</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="bg-secondary"></td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
              </tr>
              <tr class="border border-primary">
                <td className="border border-primary>">8</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="bg-secondary"></td>
                <td className="border border-primary>">6</td>
                <td className="border border-primary>">9</td>
                <td className="border border-primary>">5</td>
                <td className="bg-secondary"></td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">4</td>
              </tr>
              <tr class="border border-primary">
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="bg-secondary"></td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">4</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="bg-secondary"></td>
                <td className="border border-primary>">5</td>
                <td className="border border-primary>">9</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
              </tr>
              <tr>
                <td className="bg-secondary"></td>
                <td className="bg-secondary"></td>
                <td className="bg-secondary"></td>
                <td className="bg-secondary"></td>
                <td className="bg-secondary"></td>
                <td className="bg-secondary"></td>
                <td className="bg-secondary"></td>
                <td className="bg-secondary"></td>
                <td className="bg-secondary"></td>
                <td className="bg-secondary"></td>
                <td className="bg-secondary"></td>

              </tr>
              <tr class="border border-primary"></tr>
              <tr class="border border-primary"></tr>
              <tr class="border border-primary">
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">5</td>
                <td className="bg-secondary"></td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">3</td>
                <td className="bg-secondary"></td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
              </tr>
              <tr class="border border-primary">
                <td className="border border-primary>">7</td>
                <td className="border border-primary>">8</td>
                <td className="border border-primary>">6</td>
                <td className="bg-secondary"></td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">2</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="bg-secondary"></td>
                <td className="border border-primary>">1</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
              </tr>
              <tr class="border border-primary">
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="bg-secondary"></td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="border border-primary>">&nbsp;&nbsp;</td>
                <td className="bg-secondary"></td>
                <td className="border border-primary>">7</td>
                <td className="border border-primary>">8</td>
                <td className="border border-primary>">2</td>
              </tr>
            </table>
            

            <div class="position-absolute top-0 end-0">
        <Button className="btn btn-primary-lg">Verify</Button>
        <Button className="btn btn-primary-lg">Try Again</Button>
        <h4>Login to Save:</h4>
        <Button className="btn btn-primary-lg">Login</Button>
      </div>
</div>
          </div>
        </div>
      </div>

  
  )
}