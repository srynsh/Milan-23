import React, { useContext, useState } from "react"
import axios from 'axios'
import SocketContext from "../context/socket";

import '../admin-page.css'

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    return randomString;
}

function NewEvent({ seteventdata }) {
    const socket = useContext(SocketContext);
    const hostels = ["ARYABHATTA",
    "BHASKARA",
    "MAITREYI",
    "GARGI",
    "SARABHAI",
    "CHARAKA",
    "SUSRUTA",
    "KAUTILYA",
    "VYASA",
    "BRAHMAGUPTA",
    "VARAHAMIHIRA",
    "RAMANUJA",
    "RAMANUJAN",
    "RAMAN",
    "VISWESWARAYA",
    "BHABHA",
    "KALAM",
    "KAPILA"]
    const [team1, setteam1] = useState("ARYABHATTA")
    const [team2, setteam2] = useState("BHASKARA")
    const [event, setevent] = useState("Football")
    const addnewevent = async () => {
        const idgenerated = generateRandomString(10)
        socket.emit("recieve_data",
            {
                sport: event,
                event: event,
                id: idgenerated,
                team1: team1,
                team2: team2,
            });

        if (event == "Football") {
            console.log("UPDATING ")
            seteventdata(prev => [...prev, { id: idgenerated, sport: "Football", team1: team1, team2: team2, score1: 0, score2: 0 }])
        }
        else if (event == 'Cricket') {
            seteventdata(prev => [...prev, { id: idgenerated, sport: 'Cricket', team1: team1, team2: team2, score1: 0, score2: 0, wicket1: 0, wicket2: 0, over1: 0, over2: 0 }])
        }
        else if (event == "Tennis") {
            console.log("UPDATING ")
            seteventdata(prev => [...prev, { id: idgenerated, sport: "Tennis", team1: team1, team2: team2, score1: 0, score2: 0 }])
        } else if (event == "Hockey") {
            console.log("UPDATING ")
            seteventdata(prev => [...prev, { id: idgenerated, sport: "Hockey", team1: team1, team2: team2, score1: 0, score2: 0 }])
        } else if (event == "Basketball") {
            console.log("UPDATING ")
            seteventdata(prev => [...prev, { id: idgenerated, sport: "Basketball", team1: team1, team2: team2, score1: 0, score2: 0 }])
        }
        else if (event == "Badminton") {
            console.log("UPDATING ")
            seteventdata(prev => [...prev, { id: idgenerated, sport: "Badminton", team1: team1, team2: team2, score1: [0], score2: [0] }])
        }
        else if (event == "Table Tennis") {
            console.log("UPDATING ")
            seteventdata(prev => [...prev, { id: idgenerated, sport: "Table Tennis", team1: team1, team2: team2, score1: [0], score2: [0] }])
        }else if (event == "Volleyball") {
            console.log("UPDATING ")
            seteventdata(prev => [...prev, { id: idgenerated, sport: "Volleyball", team1: team1, team2: team2, score1: [0], score2: [0] }])
        }else if (event == "Squash") {
            console.log("UPDATING ")
            seteventdata(prev => [...prev, { id: idgenerated, sport: "Squash", team1: team1, team2: team2, score1: [0], score2: [0] }])
        }

    }

    return (
        <div className="sports-sel-div">
            <select name="events" className="sport-sel"value={event} onChange={(e) => { setevent(e.target.value) }}>
                <option value="Football">Football</option>
                <option value="Cricket">Cricket</option>
                <option value="Hockey">Hockey</option>
                <option value="Basketball">Basketball</option>
                <option value="Tennis">Tennis</option>
                <option value="Badminton">Badminton</option>
                <option value="Volleyball">Volleyball</option>
                <option value="Squash">Squash</option>
                <option value="TableTennis">Table Tennis</option>
            </select>
            <div className="sports-sel-div1">
            <select name="team1" value={team1} onChange={(e) => { setteam1(e.target.value) }} >
                {hostels.map(hostel => { return <option value={hostel}>{hostel}</option> })}
            </select>
            <h3>VS</h3>
            <select name='team2' value={team2} onChange={(e) => { 
                                if(e.target.value == team1){
                                    setteam2(team2);
                                }else{ setteam2(e.target.value)} }}>
                {hostels.map(hostel => { return <option value={hostel}>{hostel}</option> })}
            </select>
            </div>
            <button onClick={addnewevent}>Add New Event</button>
        </div>
    )
}

export default NewEvent