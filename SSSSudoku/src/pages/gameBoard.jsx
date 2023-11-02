export default function Game() {
  return (
    <div>
      <table border="2">
        {/* Outermost caption tag for enclosing table information */}
        <caption>
          <h4>Sudoku Puzzle</h4>
          {/* <p><em>Directions</em>: Have each 3x3 square, each row, and each column have a number from 1 - 9. No repeat numbers allowed per row, column, or 3x3 square.</p> */}
        </caption>
        {/* <thead> tag is commonly used to include informative description of table  */}
        <thead>
          {/* <!-- The <tr> tag represents the first `row` of the table --> */}
          <tr>
            {/* <!-- These <th> tags are header columns, one for difficulty, and one for the difficulty level (Easy) --> */}
            <th colspan="5" style="border: none">Difficulty</th>
            <th colspan="3" style="border: none">Easy</th>
          </tr>
        </thead>
        <tr>
          {/* <!-- First three cells have a 3, 9, and 8 --> */}
          <td>3</td>
          <td>9</td>
          <td>8</td>
          {/* <!-- empty cells filled with non-breaking spaces to give more whitespace --> */}
          <td style="border: none"></td>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
          <td style="border: none"></td>
          <td>&nbsp;&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
          <td>2</td>
          <td style="border: none"></td>
          <td>&nbsp;&nbsp;</td>
          <td>8</td>
          <td>&nbsp;&nbsp;</td>
          <td style="border: none"></td>
          <td>3</td>
          <td>5</td>
          <td>9</td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
          <td style="border: none"></td>
          <td>1</td>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
          <td style="border: none"></td>
          <td>4</td>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr>
          <td>&nbsp;&nbsp;</td>
          <td>4</td>
          <td>9</td>
          <td style="border: none"></td>
          <td>&nbsp;&nbsp;</td>
          <td>1</td>
          <td>&nbsp;&nbsp;</td>
          <td style="border: none"></td>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
        </tr>
        <tr>
          <td>8</td>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
          <td style="border: none"></td>
          <td>6</td>
          <td>9</td>
          <td>5</td>
          <td style="border: none"></td>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
          <td>4</td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
          <td style="border: none"></td>
          <td>&nbsp;&nbsp;</td>
          <td>4</td>
          <td>&nbsp;&nbsp;</td>
          <td style="border: none"></td>
          <td>5</td>
          <td>9</td>
          <td>&nbsp;&nbsp;</td>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
          <td>5</td>
          <td style="border: none"></td>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
          <td>3</td>
          <td style="border: none"></td>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>6</td>
          <td style="border: none"></td>
          <td>&nbsp;&nbsp;</td>
          <td>2</td>
          <td>&nbsp;&nbsp;</td>
          <td style="border: none"></td>
          <td>1</td>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
          <td style="border: none"></td>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;</td>
          <td style="border: none"></td>
          <td>7</td>
          <td>8</td>
          <td>2</td>
        </tr>
      </table>    
      </div>
  )
}