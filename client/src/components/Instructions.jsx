import howToPlay from '../assets/howtoplay.png';
import howNotToPlay from '../assets/hownottoplay.png';
import React from 'react';
import background from '../assets/bg6.jpg';
import '../style.css';
export default function Instructions() {
  const button2Style = {
    margin: "0 10px", // Add margin between buttons
    width: "180px",
    // backgroundColor: '#ddd',
    border: 'none',
    color: 'black',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer',
    borderRadius: '16px'
  };
    return (
      <div className="body">
      <div className='text-center '>

      <h1 className='text-center text-black'><em>How To Play: </em></h1>
      <ul className='list-group text-center'>
        <li className='text-black fs-3'>
          Have each 3x3 square, each row, and each column have a number from 1 - 9.
        </li>

        
         <img src= {howToPlay} className="img-fluid mx-auto d-block card-img-top rounded" style={{ width: "16%" }} alt="site pictures"></img>
        <li className='text-black fs-3'>
          No repeat numbers allowed per row, column, or 3x3 square.
        </li>
        <img src= {howNotToPlay}className="img-fluid mx-auto d-block card-img-top rounded" style={{ width: "16%" }} alt="site pictures"></img>

      </ul>
      </div>
    <a href="/home" className="btn position-absolute bottom-0 end-95 mb-3 btn-info" style={button2Style}>
              Home
            </a>
    </div>
  )
}