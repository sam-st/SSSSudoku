// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import WelcomeNav from './components/WelcomeNav';
// import Nav from './components/NavTabs';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      {/* < WelcomeNav /> */}
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;