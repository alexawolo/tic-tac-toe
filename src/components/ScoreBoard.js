import React from 'react'

export const ScoreBoard = ({scores, xPlaying}) => {
    const {xScore, oScore} = scores

    const inactive = 'border-solid border-b-4 border-transparent'
    const xscore = 'text-red-500 border-b-4 border-solid border-red-500 rounded-l'
    const oscore = 'text-blue-500 border-b-4 border-solid border-blue-500 rounded-r'
    const score = 'w-full text-center py-4'
    const xclasses = `${score} ${xscore} ${!xPlaying && inactive}`
    const oclasses = `${score} ${oscore} ${xPlaying && inactive}`

  return (
    <div className='flex flex-row items-center justify-evenly w-80 text-2xl bg-white mx-auto my-12 shadow rounded font-bold'>
        <span className={xclasses}>X - {xScore}</span>
        <span className={oclasses}>O - {oScore}</span>
    </div>
  )
}