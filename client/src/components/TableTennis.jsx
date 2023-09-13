import React from 'react'

export const TableTennis = (parse) => {
    function returnScore(singleScore,i){
        return(
            <div className='rounded-full bg-white shadow-md shadow-[#00000078] md:text-xl m-2 w-6 h-6 md:w-8 md:h-8 flex justify-center items-center p-2 text-black' key={i}>
            {singleScore}
            </div>
        )
    }
  return (
    <div className='rounded-3xl livescore-sports-box w-5/6 mx-auto my-4 flex flex-col justify-center items-center p-4'>
        <div className='text-center rounded-3xl bg-[#a40035] mx-auto my-2 inline-block lg:text-2xl py-2 px-4 Parkinson text-white shadow-md shadow-[#00000078]'>
            TableTennis
        </div>
        <div className='flex justify-around items-center w-full md:w-4/5 Parkinson text-[#ffbf86] my-1 bg-[#ffffff76] rounded-full shadow-sm'>
        <div className='bg-[#a40035] rounded-3xl text-xs md:text-xl py-2 w-2/5 md:1/5 lg:w-1/5 text-center shadow-md shadow-[#00000078]'>
            {parse.team1}
        </div>
        <div className='flex bg-[#a40035] rounded-full my-2'>
        {parse.score1.map(returnScore)}
        </div>
        </div>
        <div className='flex justify-around items-center w-full md:w-4/5 Parkinson text-[#ffbf86] my-1 bg-[#ffffff76] rounded-full shadow-sm'>
        <div className='bg-[#a40035] rounded-3xl text-xs md:text-xl py-2 w-2/5 md:1/5 lg:w-1/5 text-center shadow-md shadow-[#00000078]'>
            {parse.team2}
        </div>
        <div className='flex bg-[#a40035] rounded-full my-2'>
        {parse.score2.map(returnScore)}
        </div>
        </div>
        
    </div>
  )
}
