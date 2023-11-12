import React from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth'; // replace with the path to your Auth module

function Logout() {
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
  const history = useNavigate();

  const handleLogout = () => {
    Auth.logout();
    history.push('/');
  };

  return (
    <div>

    <button onClick={handleLogout}>
      Logout
    </button>
    <a href="/home" className="btn btn-warning" style={button2Style}>
                Home
              </a>
    </div>
    
  );
}

export default Logout;