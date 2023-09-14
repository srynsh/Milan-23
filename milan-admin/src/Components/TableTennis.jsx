import React, { useContext, useState, useEffect } from "react"
import axios from 'axios'
import SocketContext from '../context/socket'

function TableTennis({ id, team1, team2, score1, score2 }) {
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
        <div style={{ position: 'relative', border: '1px solid red' }}>
            <div>TableTennis</div>
            <button style={{position: 'absolute', right: 0, top: 0}} onClick={removematch}>Remove Match</button>

            <div style={{ display: 'flex' }}>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>{team1}</div>

                    {updatescore1.map((score, index) => (
                        <div key={index}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>

                                <button onClick={() => settupdatescore1([...updatescore1.slice(0, index), score + 1, ...updatescore1.slice(index + 1)])}>+</button>
                                <input
                                    type="number"
                                    value={score}
                                    onChange={(e) => settupdatescore1([...updatescore1.slice(0, index), parseInt(e.target.value), ...updatescore1.slice(index + 1)])}
                                />
                                <button onClick={() => settupdatescore1([...updatescore1.slice(0, index), score - 1, ...updatescore1.slice(index + 1)])}>-</button>
                            </div>
                        </div>
                    ))}


                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>{team2}</div>
                    {updatescore2.map((score, index) => (
                        <div key={index}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>

                                <button onClick={() => settupdatescore2([...updatescore2.slice(0, index), score + 1, ...updatescore2.slice(index + 1)])}>+</button>
                                <input
                                    type="number"
                                    value={score}
                                    onChange={(e) => settupdatescore2([...updatescore2.slice(0, index), parseInt(e.target.value), ...updatescore2.slice(index + 1)])}
                                />
                                <button onClick={() => settupdatescore2([...updatescore2.slice(0, index), score - 1, ...updatescore2.slice(index + 1)])}>-</button>
                            </div>
                        </div>
                    ))}

                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>

                    {updatescore2.map((score, index) => (
                        <div >
                            <button onClick={() => { settupdatescore2(updatescore2.filter((_, i) => i !== index)), settupdatescore1(updatescore1.filter((_, i) => i !== index)) }}>Remove</button>
                        </div>
                    ))}
                </div>


            </div>
            <br />
            <button onClick={() => { settupdatescore2([...updatescore2, 0]), settupdatescore1([...updatescore1, 0]) }}>Add Score</button> <br /><br />
            <button onClick={updatescore}>Submit</button>
        </div>
    )
}

export default TableTennis;