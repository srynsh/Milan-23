import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { OverallScores } from "./components/OvrLeaderboard";

function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <Router>
      <div className="hamburger" onClick={() => setShowNav(!showNav)}>
        <div className="ham-rec1"></div>
        <div className="ham-rec1"></div>
        <div className="ham-rec1"></div>
      </div>
      {showNav && <Navbar showNav={showNav} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/schedule" element={<OverallScores />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
