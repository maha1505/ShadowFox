import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Team from './pages/Team';
import Schedule from './pages/Schedule';
import Stats from './pages/Stats';
import News from './pages/News';
import FanZone from './pages/FanZone';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/news" element={<News />} />
        <Route path="/fanzone" element={<FanZone />} />
      </Routes>
    </Router>
  );
}

export default App;
