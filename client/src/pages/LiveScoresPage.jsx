import React, { useState, useEffect } from 'react';
import '../livescore.css';
import { Football } from "../components/Football";
import { Hockey } from "../components/Hockey";
import { Cricket } from "../components/Cricket";
import { Basketball } from '../components/Basketball';
import { Badminton } from '../components/Badminton';
import { Squash } from "../components/Squash";
import { TableTennis } from "../components/TableTennis";
import { Tennis } from "../components/Tennis";
import { Volleyball } from "../components/Volleyball";
import { livescore } from '../utils/livescore';
import { LiveScoreState } from '../context/LiveScoreProvider';

export const LiveScoresPage = () => {
  const [eventsdata, setEventsdata] = useState(null);
  const livescore = LiveScoreState()
  // useEffect(() => {
  //   function upDateScores() {
  //     fetch("./demo2.json")
  //       .then(response => {
  //         if (!response.ok) {
  //           throw new Error(`Network response was not ok. Status: ${response.status}`);
  //         }
  //         return response.json();
  //       })
  //       .then(data => {
  //         setEventsdata(data);

  //       })
  //       .catch(error =>{
  //         console.error(error);
  //       });
  //   }

  //   upDateScores();
  //   const intervalId = setInterval(upDateScores, 5000);
  //   return () => clearInterval(intervalId);
  // }, []);
  
  function DisplayScores(indData){
      if(indData.sport === "Football"){
        return(
        <Football key={indData.id} team1={indData.team1} team2={indData.team2} score1={indData.score1} score2={indData.score2} />
        )
      }
      else if(indData.sport === "Hockey"){
        return(
        <Hockey key={indData.id} team1={indData.team1} team2={indData.team2} score1={indData.score1} score2={indData.score2} />
        )
      }
      else if(indData.sport === "Cricket"){
        return(
          <Cricket key={indData.id} team1={indData.team1} team2={indData.team2} score1={indData.score1} score2={indData.score2} over1={indData.over1} over2={indData.over2} wicket1 = {indData.wicket1} wicket2 = {indData.wicket2} />
        )
      }
      else if(indData.sport === "Basketball"){
        return(
          <Basketball key={indData.id} team1={indData.team1} team2={indData.team2} score1={indData.score1} score2={indData.score2} />
        )
      }
      else if(indData.sport === "Badminton"){
        return(
          <Badminton key={indData.id} team1={indData.team1} team2={indData.team2} score1={indData.score1} score2={indData.score2} />
        )
      }
      else if(indData.sport === "TableTennis"){
        return(
          <TableTennis key={indData.id} team1={indData.team1} team2={indData.team2} score1={indData.score1} score2={indData.score2} />
        )
      }
      else if(indData.sport === "Volleyball"){
        return(
          <Volleyball key={indData.id} team1={indData.team1} team2={indData.team2} score1={indData.score1} score2={indData.score2} />
        )
      }
      else if(indData.sport === "Squash"){
        return(
          <Squash key={indData.id} team1={indData.team1} team2={indData.team2} score1={indData.score1} score2={indData.score2} />
        )
      }
      else if(indData.sport === "Tennis"){
        return(
          <Tennis key={indData.id} team1={indData.team1} team2={indData.team2} score1={indData.score1} score2={indData.score2} />
        )
      }
      
  }


  return (
    
    <>
    <div className='liveScore-box p-4'>
    <div className='text-center rounded-xl bg-[#a40035] mx-auto my-12 lg:my-16 w-2/5 md:w-1/5 lg:w-1/6 text-2xl lg:text-4xl p-2 Parkinson text-white shadow-md shadow-[#00000078]'>
      Live Score
    </div>
    {
    livescore.events != null ? (
      livescore.events.length == [] ? (
        <div className='my-16 mx-4 text-2xl md:text-4xl lg:text-5xl text-center Parkinson text-white '>
          Currently No Matches are going on
        </div>
      ) : (
        livescore.events.map(DisplayScores)
      )
      )   : null
    }
    </div>
   </>
  )
}
