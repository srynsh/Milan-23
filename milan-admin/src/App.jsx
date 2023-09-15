import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chess from './Components/chess'
import Football from './Components/football'
import Cricket from './Components/cricket'
import NewEvent from './Components/createnewmatch'
import axios from 'axios'
import SocketContext, { socket } from './context/socket'
import SocketManager from './utils/sockethandler'
import Hockey from './Components/Hockey'
import Basketball from './Components/Basketball'
import Tennis from './Components/Tennis'
import Badminton from './Components/Badminton'
import Squash from './Components/Squash'
import TableTennis from './Components/TableTennis'
import Volleyball from './Components/Volleyball'
import { useCookies } from 'react-cookie';

function App() {
  const [eventdata, seteventdata] = useState([])
  const [cookies, setCookie] = useCookies()

  const admincookie = cookies.adminauthtoken

  const signin = () => {
    window.location.href = 'http://localhost:8000/auth/google/admin';
  }

  // Cricket, Football, Hockey, Volleyball, Basketball, Badminton, Tennis, Table Tennis, Squash, Dodgeball 

  return (
    <SocketContext.Provider value={socket}>
      {!admincookie ? <div className='main'>
        <SocketManager eventdata={eventdata} seteventdata={seteventdata} />
        {/*  Include in same route with auth checking */}
        {/* OR make a new admin.milan.iith.ac.in  */}
        <h1 className='heading'>
          Milan Admin Panel
        </h1>
        <div>
          <NewEvent seteventdata={seteventdata} />
          {eventdata && eventdata.map(event => {
            if (event.sport == "Football") {
              return <Football key={event.id} id={event.id} team1={event.team1} team2={event.team2} score1={event.score1} score2={event.score2} />
            } else if (event.sport == 'Cricket') {
              return <Cricket key={event.id} id={event.id} team1={event.team1} team2={event.team2} score1={event.score1} score2={event.score2} wicket1={event.wicket1} wicket2={event.wicket2} over1={event.over1} over2={event.over2} />
            } else if (event.sport == 'Basketball') {
              return <Basketball key={event.id} id={event.id} team1={event.team1} team2={event.team2} score1={event.score1} score2={event.score2} wicket1={event.wicket1} wicket2={event.wicket2} over1={event.over1} over2={event.over2} />
            } else if (event.sport == 'Hockey') {
              return <Hockey key={event.id} id={event.id} team1={event.team1} team2={event.team2} score1={event.score1} score2={event.score2} wicket1={event.wicket1} wicket2={event.wicket2} over1={event.over1} over2={event.over2} />
            } else if (event.sport == 'Tennis') {
              return <Tennis key={event.id} id={event.id} team1={event.team1} team2={event.team2} score1={event.score1} score2={event.score2} wicket1={event.wicket1} wicket2={event.wicket2} over1={event.over1} over2={event.over2} />
            } else if (event.sport == 'Badminton') {
              return <Badminton key={event.id} id={event.id} team1={event.team1} team2={event.team2} score1={event.score1} score2={event.score2} wicket1={event.wicket1} wicket2={event.wicket2} over1={event.over1} over2={event.over2} />
            } else if (event.sport == 'Table Tennis') {
              return <TableTennis key={event.id} id={event.id} team1={event.team1} team2={event.team2} score1={event.score1} score2={event.score2} wicket1={event.wicket1} wicket2={event.wicket2} over1={event.over1} over2={event.over2} />
            } else if (event.sport == 'Volleyball') {
              return <Volleyball key={event.id} id={event.id} team1={event.team1} team2={event.team2} score1={event.score1} score2={event.score2} wicket1={event.wicket1} wicket2={event.wicket2} over1={event.over1} over2={event.over2} />
            } else if (event.sport == 'Squash') {
              return <Squash key={event.id} id={event.id} team1={event.team1} team2={event.team2} score1={event.score1} score2={event.score2} wicket1={event.wicket1} wicket2={event.wicket2} over1={event.over1} over2={event.over2} />
            }
            return null
          })}

          <br />
        </div>
      </div> :
        <div>
          <button type="button" class="google-sign-in-button" onClick={signin}>
            Sign in with Google
          </button>
        </div>}
    </SocketContext.Provider>
  )
}

export default App
// export io;