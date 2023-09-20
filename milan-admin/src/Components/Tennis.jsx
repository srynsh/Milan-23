import React, { useContext, useState,useEffect } from "react"
import axios from 'axios'
import SocketContext from '../context/socket'

function Tennis({ id, team1, team2, score1, score2 }) {
    const [updatescore1, settupdatescore1] = useState(score1)
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
        <div className="fhtb">
      <h1>TENNIS</h1>
      <button className="rm-match" onClick={removematch}>
        End Match
      </button>
      <div className="fhtb-s">
        <div className="fhtb-sc">
          <h2>{team1}</h2>
          <div className="fhtb-sc-w">
            <button
              onClick={() => {
                settupdatescore1(updatescore1 - 1);
              }}
            >
              -
            </button>
            <input
              type="number"
              value={updatescore1}
              onChange={(e) => {
                settupdatescore2(e.target.value);
              }}
            />
            <button
              onClick={() => {
                settupdatescore1(updatescore1 + 1);
              }}
            >
              +
            </button>
          </div>
        </div>

        <div className="fhtb-sc">
          <h2>{team2}</h2>
          <div className="fhtb-sc-w">
          <button
              onClick={() => {
                settupdatescore2(updatescore2 - 1);
              }}
            >
              -
            </button>
            <input
              type="number"
              value={updatescore2}
              onChange={(e) => {
                settupdatescore2(e.target.value);
              }}
            /><button
            onClick={() => {
              settupdatescore2(updatescore2 + 1);
            }}
          >
            +
          </button>
            
          </div>
        </div>
      </div>
      <button className="up" onClick={updatescore}>
        Submit
      </button>
    </div>
    )
}

export default Tennis;