import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';

/**
 * App root — mirrors your project-react pattern (Routes-ready).
 * For now: single-page portfolio with hash navigation (#about, #projects).
 * Later: add <Routes> for /admin if you build a CMS dashboard.
 */
export default function App() {
  return (
    <div id="home" className="min-h-screen">
      <Navbar />
      <HomePage />
    </div>
  );
}
