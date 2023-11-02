import React from 'react';
import '../style.css';

export default function Game() {
  const containerStyle = {
    marginTop: '10vh',
  };

  const cardStyle = {
    maxWidth: '60%',
    padding: '20px',
  };

  const buttonStyle = {
    width: '75%',
  };

  return (
    <>
      <div
        className="container-fluid d-flex h-100 justify-content-center align-items-center"
        style={containerStyle}
      >
        <div className="card text-center bg-dark text-light" style={cardStyle}>
          <div className="card-body">
            <h2 className="card-title">S u d o k u</h2>
            <button className="btn btn-dark d-block mx-auto mb-2" style={buttonStyle}>
              Button 1
            </button>
            <button className="btn btn-dark d-block mx-auto mb-2" style={buttonStyle}>
              Button 2
            </button>
            <button className="btn btn-dark d-block mx-auto" style={buttonStyle}>
              Button 3
            </button>
          </div>
        </div>
      </div><div class="wrap">
        <svg class="svg">
          <text
            x="10"
            y="90"
            font-family="Helvetica, Arial, sans-serif"
            font-size="80"
            fill="white"
          >
            1
          </text>
        </svg>

        <svg class="svg">
          <text
            x="10"
            y="90"
            font-family="Helvetica, Arial, sans-serif"
            font-size="80"
            fill="white"
          >
            2
          </text>
        </svg>

        <svg class="svg">
          <text
            x="10"
            y="90"
            font-family="Helvetica, Arial, sans-serif"
            font-size="80"
            fill="white"
          >
            3
          </text>
        </svg>

        <svg class="svg">
          <text
            x="10"
            y="90"
            font-family="Helvetica, Arial, sans-serif"
            font-size="80"
            fill="white"
          >
            4
          </text>
        </svg>

        <svg class="svg">
          <text
            x="10"
            y="90"
            font-family="Helvetica, Arial, sans-serif"
            font-size="80"
            fill="white"
          >
            5
          </text>
        </svg>

        <svg class="svg">
          <text
            x="10"
            y="90"
            font-family="Helvetica, Arial, sans-serif"
            font-size="80"
            fill="white"
          >
            6
          </text>
        </svg>

        <svg class="svg">
          <text
            x="10"
            y="90"
            font-family="Helvetica, Arial, sans-serif"
            font-size="80"
            fill="white"
          >
            7
          </text>
        </svg>

        <svg class="svg">
          <text
            x="10"
            y="90"
            font-family="Helvetica, Arial, sans-serif"
            font-size="80"
            fill="white"
          >
            8
          </text>
        </svg>

        <svg class="svg">
          <text
            x="10"
            y="90"
            font-family="Helvetica, Arial, sans-serif"
            font-size="80"
            fill="white"
          >
            9
          </text>
        </svg>
      </div></>
  )
}