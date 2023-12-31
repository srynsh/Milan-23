import React from 'react'

export const Football = (parse) => {
  return (
    <div className='rounded-3xl livescore-sports-box w-5/6 mx-auto my-4 flex flex-col justify-center items-center p-4'>
        <div className='text-center rounded-3xl bg-[#a40035] mx-auto my-2 inline-block lg:text-2xl py-2 px-4 Parkinson text-white shadow-md shadow-[#00000078]'>
            Football
        </div>
        <div className="flex justify-around items-center w-full Parkinson text-[#ffbf86]">
          <div className='bg-[#a40035] rounded-3xl text-xs md:text-xl py-2 w-2/5 md:1/5 lg:w-1/5 text-center shadow-md shadow-[#00000078]'>
            {parse.team1}
          </div>
          <div className='bg-[#a40035] rounded-3xl text-xs md:text-xl py-2 w-2/5 md:1/5 lg:w-1/5 text-center shadow-md shadow-[#00000078]'>
            {parse.team2}
          </div>
        </div>
        <div className="flex justify-around items-center w-full Parkinson text-black m-2">
          <div className='rounded-full bg-white shadow-md shadow-[#00000078] text-3xl m-2 w-16 h-16 flex justify-center items-center p-2'>
            {parse.score1}
          </div>
          <div className='rounded-full bg-white shadow-md shadow-[#00000078] text-3xl m-2 w-16 h-16 flex justify-center items-center p-2'>
            {parse.score2}
          </div>
        </div>
    </div>
  )
}
