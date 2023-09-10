import React from 'react'
import { useState, useEffect } from 'react';

export const BadmintonScore = () => {

    const [team1Name, setTeam1Name] = useState("");
    const [team2Name, setTeam2Name] = useState("");
    const [team1set1Points, setTeam1set1Points] = useState(0);
    const [team2set1Points, setTeam2set1Points] = useState(0);
    const [team1set2Points, setTeam1set2Points] = useState(0);
    const [team2set2Points, setTeam2set2Points] = useState(0);
    const [team1set3Points, setTeam1set3Points] = useState(0);
    const [team2set3Points, setTeam2set3Points] = useState(0);
    const [isMatchStarted, setisMatchStarted] = useState(null);
    const [isSet1Over, setIsSet1Over] = useState(null);
    const [isSet2Over, setIsSet2Over] = useState(null);
    const [isMatchEnded, setIsMatchEnded] = useState(null);

    const [team1Points, setTeam1Points] = useState(0);
    const [team2Points, setTeam2Points] = useState(0);

    

    useEffect(() => {
        function upDateScores() {
            fetch("./demo.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok. Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setTeam1Name(data.Badminton.team1);
                setTeam2Name(data.Badminton.team2);
                setTeam1set1Points(data.Badminton.team1set1Points);
                setTeam2set1Points(data.Badminton.team2set1Points);
                setTeam1set2Points(data.Badminton.team1set2Points);
                setTeam2set2Points(data.Badminton.team2set2Points);
                setTeam1set3Points(data.Badminton.team1set3Points);
                setTeam2set3Points(data.Badminton.team2set3Points);
                setTeam1Points(data.Badminton.team1Points);
                setTeam2Points(data.Badminton.team2Points);
                setisMatchStarted(data.Badminton.isMatchStarted);
                setIsSet1Over(data.Badminton.isSet1Over);
                setIsSet2Over(data.Badminton.isSet2Over);
                setIsMatchEnded(data.Badminton.isMatchEnded);
                     
            })
            .catch(error => {
                console.error(error);
            });
        }

        upDateScores();
        const intervalId = setInterval(upDateScores, 5000);
        return () => clearInterval(intervalId);
    }, []);
  return (
    <>
    <div className="text-center">
        Badminton Match: {team1Name} vs {team2Name}
    </div>
    {isMatchStarted ? 
    <>
    <div className='flex justify-around'>
        <div>
            <div>{team1Name}</div>
            <div>{team1set1Points}</div>
            
            {isSet1Over ? 
            <>
            <div>{team1set2Points}</div>
            </>: ""}
            {isSet2Over && !isMatchEnded ? 
            <>
            <div>{team1set3Points}</div>
            </>: ""}

            <div className="font-bold">
            {team1Points}
            </div>
        </div>
        <div>
            <div>{team2Name}</div>
            <div>{team2set1Points}</div>

            {isSet1Over ? 
            <>
            <div>{team2set2Points}</div>
            </>: ""}
            {isSet2Over && !isMatchEnded ? 
            <>
            <div>{team2set3Points}</div>
            </>: ""}

            <div className="font-bold">
            {team2Points}
            </div>
        </div>
    </div>
    {
        isMatchEnded ?
        <>
        <div className="text-center">
            {team1Points > team2Points ?
            <>
            <div className="text-center">
                {team1Name} won the match
            </div>
            </>:""}
            {team1Points < team2Points ?
            <>
            <div className="text-center">
                {team2Name} won the match
            </div>
            </>:""}
        </div>
        </>:""
    }
    
    </>:
    <>
    <div className='text-center'>
        The Match has Not Started Yet
    </div>
    </>}
    </>
  )
}
