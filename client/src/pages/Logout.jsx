import React from 'react';
import { useHistory } from 'react-router-dom';
import Auth from './utils/auth'; // replace with the path to your Auth module

function Logout() {
  const history = useHistory();

  const handleLogout = () => {
    Auth.logout();
    history.push('/');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;