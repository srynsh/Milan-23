import React from 'react'
import { useState, useEffect } from 'react';

export const FootballScore = () => {

    const [team1Name, setTeam1Name] = useState(null);
    const [team2Name, setTeam2Name] = useState(null);
    const [team1Goals, setteam1Goals] = useState(null);
    const [team2Goals, setTeam2Goals] = useState(null);
    const [FootballMatchStarted, setFootballMatchStarted] = useState(null);
    const [fullTime, setfullTime] = useState(null);

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
                setTeam1Name(data.Football.team1);
                setTeam2Name(data.Football.team2);
                setteam1Goals(data.Football.team1Goals);
                setTeam2Goals(data.Football.team2Goals);
                setFootballMatchStarted(data.Football.isFootballMatchStarted);
                setfullTime(data.Football.FootballFullTime);
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
        <div className='text-center'>
            Football Match : {team1Name} vs {team2Name}
        </div>
        {FootballMatchStarted ?
        <>
            <div className='flex justify-around'>
                <div>
                    <div>{team1Name}</div>
                    <div>{team1Goals}</div>
                </div>
                <div>
                    <div>{team2Name}</div>
                    <div>{team2Goals}</div>
                </div>
            </div>
            {fullTime ?
            <>
            {team1Goals>team2Goals ? 
            <>
            <div className="text-center">
                {team1Name} won the Match
            </div>
            </>:<></>}
            {team1Goals<team2Goals? 
            <>
            <div className="text-center">
                {team2Name} won the Match
            </div>
            </>:<></>}
            {team1Goals==team2Goals ? 
            <>
            <div className="text-center">
                The match ended in a draw
            </div>
            </>:<></>}
            </>:
            <>
            </>
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
