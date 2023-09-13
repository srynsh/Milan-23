import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Calendar from "./pages/Calendar";
import { useState } from "react";
import {LiveScoresPage} from './pages/LiveScoresPage';
import { OverallScores } from "./components/OvrLeaderboard";
import ProfilePage from "./pages/ProfilePage";
import { Events } from "./pages/Events";


function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <Router>
      <div className="hamburger" onClick={() => setShowNav(!showNav)}>
        <div className="ham-rec1"></div>
        <div className="ham-rec1"></div>
        <div className="ham-rec1"></div>
      </div>
      <Navbar showNav={showNav} setShowNav={setShowNav}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/team" element={<Team />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/livescore" element={<LiveScoresPage />} />
        <Route path="*" element={<Error />} />
        <Route path="/Profile" element={<ProfilePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
