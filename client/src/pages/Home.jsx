import React from "react";
import "../style.css";
import logo from "../assets/proj3.png";

export default function Game() {
  const containerStyle = {
    marginTop: "10vh",
  };

  const cardStyle = {
    maxWidth: "60%",
    padding: "20px",
  };

  const buttonGroupStyle = {
    display: "flex",
    justifyContent: "center", // Align buttons horizontally in the center
  };

  const button1Style = {
    margin: "0 10px", // Add margin between buttons
    width: "180px",
  };

  const button2Style = {
    margin: "0 10px", // Add margin between buttons
    width: "180px",
  };

  const button3Style = {
    margin: "0 10px", // Add margin between buttons
    width: "180px",
  };

  const imageStyle = {
    width: "90px",
  };

  return (
    <>
      <div
        className="container-fluid d-flex h-100 justify-content-center align-items-center"
        style={containerStyle}
      >
        <div className="card text-center bg-dark text-light" style={cardStyle}>
          <div className="card-body">
            <div className="picture">
              <img src={logo} alt="logo to our app" style={imageStyle} />
            </div>
            <h2 className="card-title">S u d o k u</h2>
            <p>
              Fill in each square, don't repeat numbers in the same box or line
            </p>
            <div style={buttonGroupStyle}>
              <a
                href="/Instructions"
                className="btn btn-dark"
                style={button1Style}
              >
                How to Play
              </a>
              <a href="/Login" className="btn btn-dark" style={button2Style}>
                Login
              </a>
              <a href="/Game" className="btn btn-dark" style={button3Style}>
                Play
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap">
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
      </div>
    </>
  );
}
