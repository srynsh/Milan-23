import React from 'react'
import { useState, useEffect } from 'react';

export const CricketScores = () => {

    let totalNumberofOvers = 20;

    // Here team1 is the team which bats first

    const [team1Name, setTeam1Name] = useState("");
    const [team2Name, setTeam2Name] = useState("");
    const [team1Runs, setteam1Runs] = useState(0);
    const [team2Runs, setTeam2Runs] = useState(0);
    const [team1Wickets, setTeam1Wickets] = useState(0);
    const [team2Wickets, setTeam2Wickets] = useState(0);
    const [team1overs, setTeam1overs] = useState(0);
    const [team2overs, setTeam2overs] = useState(0);
    const [isCricketMatchStarted, setisCricketMatchStarted] = useState(false);
    const [isCricketFirstInningsOver, setisCricketFirstInningsOver] = useState(false);
    const [isCricketMatchOver, setisCricketMatchOver] = useState(false);
    

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
                setTeam1Name(data.Cricket.team1);
                setTeam2Name(data.Cricket.team2);
                setteam1Runs(data.Cricket.team1runs);
                setTeam2Runs(data.Cricket.team2runs);
                setTeam1Wickets(data.Cricket.team1Wickets);
                setTeam2Wickets(data.Cricket.team2Wickets);
                setTeam1overs(data.Cricket.team1overs);
                setTeam2overs(data.Cricket.team2overs);
                setisCricketMatchStarted(data.Cricket.isMatchStarted);
                setisCricketFirstInningsOver(data.Cricket.isFirstInningsOver);
                setisCricketMatchOver(data.Cricket.isMatchOver);

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
            Cricket Match : {team1Name} vs {team2Name}
        </div>
        
        {isCricketMatchStarted ? 
        <>
            <div className='flex justify-around'>
                <div className=''>
                    <div>{team1Name}</div> 
                    <div>{team1Runs}/{team1Wickets} <span>({team1overs})</span></div>
                </div>
                {isCricketFirstInningsOver ?
                <>
                    <div className=''>
                        <div>{team2Name}</div>
                        <div>{team2Runs}/{team2Wickets} <span>({team2overs})</span></div>
                    </div>
                </>:
                <>
                    <div className=''>
                        <div>{team2Name}</div>
                        <div>Yet to bat</div>
                    </div>
                </>}
            </div>
                {isCricketMatchOver ?
                <>
                    {team1Runs>team2Runs ?
                    <>
                    <div className='text-center'>
                        {team1Name} won the match against {team2Name} by {team1Runs-team2Runs} {team1Runs-team2Runs == 1 ? "Run" : "Runs"}
                    </div>
                    </>:
                    <>
                    <div className='text-center'>
                        {team2Name} won the match against {team1Name} by {10 - team2Wickets} {10 - team2Wickets == 1 ? "Wicket" : "Wickets"}
                    </div>
                    </>}
                </>:
                <>
                {isFirstInningsOver ?
                <>
                <div className='text-center'>
                    {team2Name} needs {team1Runs - team2Runs} {team1Runs - team2Runs==1 ? "run" : "runs"} to win the match in {Math.round(Math.floor(totalNumberofOvers - team2overs)*6 + 10*(team2overs-Math.floor(team2overs)))} Balls
                </div>
                </>:""}
                </>}
                

            
        </>
        : 
        <>
        <div className='text-center'>
            The Match has Not Started Yet
        </div>
        </>
        }


    </>
  )
}
