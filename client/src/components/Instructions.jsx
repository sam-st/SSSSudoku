import howToPlay from '../assets/howtoplay.png';
import howNotToPlay from '../assets/hownottoplay.png';
import React from 'react';
export default function Instructions() {
    return (
    <div>
      <div className=''>

      <h1><em>How To Play: </em></h1>
      <ul>
        <li>
          Have each 3x3 square, each row, and each column have a number from 1 - 9.
        </li>
         <img src= {howToPlay} className="img-fluid  card-img-top rounded" style={{ width: "20%" }} alt="site pictures"></img>
        <li>
          No repeat numbers allowed per row, column, or 3x3 square.
        </li>
        <img src= {howNotToPlay}className="img-fluid  card-img-top rounded" style={{ width: "20%" }} alt="site pictures"></img>

      </ul>
      </div>
    </div>
  )
}