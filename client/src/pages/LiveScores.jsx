import React from 'react'
import { CricketScores } from './CricketScores'
import { FootballScore } from './FootballScore'
import { BadmintonScore } from './BadmintonScore'

export const LiveScores = () => {
  return (
    <>
    <CricketScores/>
    <FootballScore/>
    <BadmintonScore/>
    </>
  )
}
