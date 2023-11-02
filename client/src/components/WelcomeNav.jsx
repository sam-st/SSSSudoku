import { Link, useLocation } from 'react-router-dom';

function WelcomeNav() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Game"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Game' ? 'nav-link active' : 'nav-link'}
        >
          Play
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Login"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Login' ? 'nav-link active' : 'nav-link'}
        >
          Login/Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Instructions"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Instructions' ? 'nav-link active' : 'nav-link'}
        >
          Instructions
        </Link>
      </li>
    </ul>
  );
}

export default WelcomeNav;
