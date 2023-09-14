import React, { useContext, useState,useEffect } from "react"
import axios from 'axios'
import SocketContext from '../context/socket'

function Hockey({ id, team1, team2, score1, score2 }) {
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
        <div style={{ position: 'relative', border: '1px solid red' }}>
            <div>Hockey</div>
            <button style={{position: 'absolute', right: 0, top: 0}} onClick={removematch}>Remove Match</button>

            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>{team1}</div>
                    <button onClick={() => { settupdatescore1(updatescore1 + 1) }}>+</button>
                    <input type="number" value={updatescore1} onChange={(e) => { settupdatescore2(e.target.value) }} />
                    <button onClick={() => { settupdatescore1(updatescore1 - 1) }}>-</button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>{team2}</div>
                    <button onClick={() => { settupdatescore2(updatescore2 + 1) }}>+</button>
                    <input type="number" value={updatescore2} onChange={(e) => { settupdatescore2(e.target.value) }} />
                    <button onClick={() => { settupdatescore2(updatescore2 - 1) }}>-</button>
                </div>
            </div>
            <button onClick={updatescore}>Submit</button>
        </div>
    )
}

export default Hockey;