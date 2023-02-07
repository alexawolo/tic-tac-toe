import React from 'react'

export const ResetButton = ({resetBoard}) => {
  return (
    <button 
        className="flex border-none rounded bg-blue-400 hover:bg-blue-300 text-white text-2xl px-4 py-2 my-8 mx-auto" 
        onClick={resetBoard}
    >
        Reset
    </button>
  )
}
