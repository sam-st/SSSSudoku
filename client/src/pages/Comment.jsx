import React from "react";
import "../style.css";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Confetti from 'react-confetti';



export default function Comment(){
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
return(
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
    <InputGroup className="mb-3">
        <Form.Control
          placeholder="Type your comment here."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          />
        <Button className='btn btn-lg btn-warning' id="button-addon2">
          Save
        </Button>
      </InputGroup>
          </div>
          {/* <div class="position-relative"> */}
          <div class="position-absolute bottom-0 start-50 translate-middle-x">
          <a href="/Game" className="btn btn-warning mb-5" style={button2Style}>
                Play Again
              </a>
          {/* </div> */}
          </div>
  </div>
)

}