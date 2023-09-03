import {React,useState,useEffect} from 'react'
import { SportsBoysGraphs } from '../../../Milan-Leaderboard/src/SportsBoysGraphs';
import { SportsGirlsGraphs} from '../../../Milan-Leaderboard/src/SportsGirlsGraphs'
import { CultiGraphs } from "../../../Milan-Leaderboard/src/CultiGraphs";
import {TechyGraphs} from '../../../Milan-Leaderboard/src/TechyGraphs';
import { SportsBoysTable } from '../../../Milan-Leaderboard/src/SportsBoysTable';
import { SportsGirlsTable} from '../../../Milan-Leaderboard/src/SportsGirlsTable'
import { CultiTable } from "../../../Milan-Leaderboard/src/CultiTable";
import {TechyTable} from '../../../Milan-Leaderboard/src/TechyTable';

export const Events = () => {
  const [WhichEvent, setWhichEvent] = useState('sportsboys');
  
  return (
    <>
    <div className='text-[#390035] events-container'>
    <div className="events-heading text-center text-[#390035] bg-[#f6b276] p-2 flex justify-center items-center w-2/5 sm:w-1/5 lg:w-1/6 rounded-lg">
        Events
    </div>
    <div className="flex justify-center">
        <li className={`event-boxes rounded-tl-lg rounded-bl-lg ${WhichEvent === 'sportsboys' ? 'box-active' : ''}`} onClick={() => setWhichEvent('sportsboys')}>Sports boys</li>
        <li className={`event-boxes ${WhichEvent === 'sportsgirls' ? 'box-active' : ''}`} onClick={() => setWhichEvent('sportsgirls')}>Sports Girls</li>
        <li className={`event-boxes ${WhichEvent === 'culti' ? 'box-active' : ''}`} onClick={() => setWhichEvent('culti')}>Culti</li>
        <li className={`event-boxes rounded-tr-lg rounded-br-lg ${WhichEvent === 'techy' ? 'box-active' : ''}`} onClick={() => setWhichEvent('techy')}>Techy</li>
    </div>
    <div className="scoreboard-container w-5/6 bg-[#f6b276] text-center mx-auto my-4 rounded-2xl">
        {WhichEvent === 'sportsboys' ? <SportsBoysGraphs /> : null}
        {WhichEvent === 'sportsgirls' ? <SportsGirlsGraphs /> : null}
        {WhichEvent === 'culti' ? <CultiGraphs /> : null}
        {WhichEvent === 'techy' ? <TechyGraphs /> : null}
    </div>
    <div className="w-5/6 text-center mx-auto my-4 rounded-2xl">
        {WhichEvent === 'sportsboys' ? <SportsBoysTable /> : null}
        {WhichEvent === 'sportsgirls' ? <SportsGirlsTable /> : null}
        {WhichEvent === 'culti' ? <CultiTable /> : null}
        {WhichEvent === 'techy' ? <TechyTable /> : null}
    </div>
    </div>
    </>
    )
}