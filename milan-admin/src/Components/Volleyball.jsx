import React, { useContext, useState, useEffect } from "react"
import axios from 'axios'
import SocketContext from '../context/socket'

function Volleyball({ id, team1, team2, score1, score2 }) {
    const [updatescore1, settupdatescore1] = useState([0])
    const [updatescore2, settupdatescore2] = useState(score2)
    const socket = useContext(SocketContext)

    useEffect(() => {
        settupdatescore1(score1);
    }, [score1]);
    useEffect(() => {
        settupdatescore2(score2);
    }, [score2]);

    const updatescore = async () => {
        socket.emit("update_score",
            {
                id: id,
                score1: updatescore1,
                score2: updatescore2
            });
    }
    const removematch = async () => {
        socket.emit("remove_match",
            {
                id: id,
            });
    }

    return (
        <div className="fhtb" style={{gap:'10px'}}>
      <h1>VOLLEYBALL</h1>

      <button className="rm-match" onClick={removematch}>
        End Match
      </button>

      <div className="fhtb-s" style={{gap: "1vh"}}>
        <div className="fhtb-sc" style={{gap:"10px"}}>
          <h2>{team1}</h2>
          {updatescore1.map((score, index) => (
            <div key={index}>
              <div className="fhtb-sc-w">
                <button
                  onClick={() =>
                    settupdatescore1([
                      ...updatescore1.slice(0, index),
                      score + 1,
                      ...updatescore1.slice(index + 1),
                    ])
                  }
                >
                  +
                </button>
                <input
                  type="number"
                  value={score}
                  onChange={(e) =>
                    settupdatescore1([
                      ...updatescore1.slice(0, index),
                      parseInt(e.target.value),
                      ...updatescore1.slice(index + 1),
                    ])
                  }
                />
                <button
                  onClick={() =>
                    settupdatescore1([
                      ...updatescore1.slice(0, index),
                      score - 1,
                      ...updatescore1.slice(index + 1),
                    ])
                  }
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="fhtb-sc" style={{gap:"10px"}}>
              <h2>{team2}</h2>
          {updatescore2.map((score, index) => (
            <div key={index} className="fhtb-sc-w">
              <div className="fhtb-sc-w">
                <button
                  onClick={() =>
                    settupdatescore2([
                      ...updatescore2.slice(0, index),
                      score + 1,
                      ...updatescore2.slice(index + 1),
                    ])
                  }
                >
                  +
                </button>
                <input
                  type="number"
                  value={score}
                  onChange={(e) =>
                    settupdatescore2([
                      ...updatescore2.slice(0, index),
                      parseInt(e.target.value),
                      ...updatescore2.slice(index + 1),
                    ])
                  }
                />
                <button
                  onClick={() =>
                    settupdatescore2([
                      ...updatescore2.slice(0, index),
                      score - 1,
                      ...updatescore2.slice(index + 1),
                    ])
                  }
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column",gap:'20px' }}>
          {updatescore2.map((score, index) => (
            <div>
              <button
                className="rm-match"
                onClick={() => {
                  settupdatescore2(updatescore2.filter((_, i) => i !== index)),
                    settupdatescore1(
                      updatescore1.filter((_, i) => i !== index)
                    );
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="btn-wp">
        <button
          className="up" style={{backgroundColor:"#700035"}}
          onClick={() => {
            settupdatescore2([...updatescore2, 0]),
              settupdatescore1([...updatescore1, 0]);
          }}
        >
          Add Score
        </button>{" "}
        <button className="up" onClick={updatescore}>
          Submit
        </button>
      </div>
    </div>  
    )
}

export default Volleyball;