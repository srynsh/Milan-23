import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Calendar from "./pages/Calendar";
import { useState } from "react";
import { LiveScoresPage } from './pages/LiveScoresPage';
import { OverallScores } from "./components/OvrLeaderboard";
import ProfilePage from "./pages/ProfilePage";
import { Events } from "./pages/Events";
import SocketManager from "./utils/sockethandler";
import SocketContext, { socket } from './context/socket'
import LiveScoreProvider from "./context/LiveScoreProvider";
import Sponsors from "./pages/Sponsors";
import LoginPage from "./pages/Login";
import AdminPage from "./admin-page/App";

function App() {
  // const [eventdata, seteventdata] = useState([])
  const [showNav, setShowNav] = useState(false);

  // const [events, setevents] = LiveScoreState();

  return (
    <LiveScoreProvider>
      <SocketContext.Provider value={socket}>
        <SocketManager />

        <Router>
          <div className="hamburger" onClick={() => setShowNav(!showNav)}>
            <div className="ham-rec1"></div>
            <div className="ham-rec1"></div>
            <div className="ham-rec1"></div>
          </div>
          <Navbar showNav={showNav} setShowNav={setShowNav} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/team" element={<Team />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/leaderboard" element={<Events />} />
            <Route path="/livescore" element={<LiveScoresPage />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/login"  element={<LoginPage/>} />
            <Route path="/milan-admin"  element={<AdminPage/>} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </SocketContext.Provider>
    </LiveScoreProvider>
  );
}

export default App;
