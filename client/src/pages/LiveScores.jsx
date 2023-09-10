import React from 'react'
import { CricketScores } from '../components/CricketScores'
import { FootballScore } from '../components/FootballScore'
import { BadmintonScore } from '../components/BadmintonScore'

export const LiveScores = () => {
  return (
    <>
    <CricketScores/>
    <FootballScore/>
    <BadmintonScore/>
    </>
  )
}
