import React from "react";
import "../style.css";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Confetti from 'react-confetti';
import { useState } from 'react';



export default function Comment() {
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




  return (
    <div>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={200}
      />
      <div class="position-absolute top-50 start-50 translate-middle w-75">

        <div className='text-center mb-5'>

          <h1 className='fs-1 text-white '>Congratulations!!!</h1>
          <h3 className='text-white fs-3'>You finished the game! </h3>

        </div>
      <div className='input-group mb-3'>
      <input className='form-control'
        type="text"
        placeholder="Type you comment here!"
        id="message"
        name="message"
        onChange={handleChange}
        value={comment}
      />
      <button className='btn btn-warning' onClick={handleClick}>Save</button>
    </div>
       
      </div>
   
      <div class="position-absolute bottom-0 start-50 translate-middle-x">
        <a href="/game" className="btn btn-warning mb-5" style={button2Style}>
          Play Again
        </a>
        <a href="/home" className="btn btn-warning mb-5" style={button2Style}>
Home        </a>
      </div>
    </div>
  )

}