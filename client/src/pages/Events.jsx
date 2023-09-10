import { React, useState, useEffect } from "react";
import { SportsBoysGraphs } from "../components/SportsBoysGraphs";
import { SportsGirlsGraphs } from "../components/SportsGirlsGraphs";
import { CultiGraphs } from "../components/CultiGraphs";
import { TechyGraphs } from "../components/TechyGraphs";
import { SportsBoysTable } from "../components/SportsBoysTable";
import { SportsGirlsTable } from "../components/SportsGirlsTable";
import { CultiTable } from "../components/CultiTable";
import { TechyTable } from "../components/TechyTable";
import "../events.css"

export const Events = () => {
  const [WhichEvent, setWhichEvent] = useState("sportsboys");

  return (
    <>
<<<<<<< HEAD
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
    <div className="w-5/6 mx-auto my-4 text-center rounded-2xl">
        {WhichEvent === 'sportsboys' ? <SportsBoysTable /> : null}
        {WhichEvent === 'sportsgirls' ? <SportsGirlsTable /> : null}
        {WhichEvent === 'culti' ? <CultiTable /> : null}
        {WhichEvent === 'techy' ? <TechyTable /> : null}
    </div>
    </div>
=======
      <div className="text-[#390035] events-container">
        <div className="events-heading text-center text-[#390035] bg-[#f6b276] p-2 flex justify-center items-center w-2/5 sm:w-1/5 lg:w-1/6 rounded-lg">
          Events
        </div>
        <div className="flex justify-center">
          <li
            className={`event-boxes rounded-tl-lg rounded-bl-lg ${
              WhichEvent === "sportsboys" ? "box-active" : ""
            }`}
            onClick={() => setWhichEvent("sportsboys")}
          >
            Sports boys
          </li>
          <li
            className={`event-boxes ${
              WhichEvent === "sportsgirls" ? "box-active" : ""
            }`}
            onClick={() => setWhichEvent("sportsgirls")}
          >
            Sports Girls
          </li>
          <li
            className={`event-boxes ${
              WhichEvent === "culti" ? "box-active" : ""
            }`}
            onClick={() => setWhichEvent("culti")}
          >
            Culti
          </li>
          <li
            className={`event-boxes rounded-tr-lg rounded-br-lg ${
              WhichEvent === "techy" ? "box-active" : ""
            }`}
            onClick={() => setWhichEvent("techy")}
          >
            Techy
          </li>
        </div>
        <div className="scoreboard-container w-5/6 bg-[#f6b276] text-center mx-auto my-4 rounded-2xl">
          {WhichEvent === "sportsboys" ? <SportsBoysGraphs /> : null}
          {WhichEvent === "sportsgirls" ? <SportsGirlsGraphs /> : null}
          {WhichEvent === "culti" ? <CultiGraphs /> : null}
          {WhichEvent === "techy" ? <TechyGraphs /> : null}
        </div>
        <div className="w-5/6 text-center mx-auto my-4 rounded-2xl">
          {WhichEvent === "sportsboys" ? <SportsBoysTable /> : null}
          {WhichEvent === "sportsgirls" ? <SportsGirlsTable /> : null}
          {WhichEvent === "culti" ? <CultiTable /> : null}
          {WhichEvent === "techy" ? <TechyTable /> : null}
        </div>
      </div>
>>>>>>> a44784719d6641edaeb259894e2e840cf86e960b
    </>
  );
};
