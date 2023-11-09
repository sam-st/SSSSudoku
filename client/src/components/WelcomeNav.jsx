import { Link, useLocation } from 'react-router-dom';
import Auth from '../utils/auth'; // import auth helper

function WelcomeNav() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Game"
          className={currentPage === '/Game' ? 'nav-link active' : 'nav-link'}
        >
          Play
        </Link>
      </li>
      <li className="nav-item">
        {Auth.loggedIn() ? (
          <Link
            to="/logout"
            className={currentPage === '/logout' ? 'nav-link active' : 'nav-link'}
          >
            Logout
          </Link>
        ) : (
          <Link
            to="/Login"
            className={currentPage === '/Login' ? 'nav-link active' : 'nav-link'}
          >
            Login/Sign Up
          </Link>
        )}
      </li>
      <li className="nav-item">
        <Link
          to="/Instructions"
          className={currentPage === '/Instructions' ? 'nav-link active' : 'nav-link'}
        >
          Instructions
        </Link>
      </li>
    </ul>
  );
}

export default WelcomeNav;