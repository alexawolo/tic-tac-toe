import React from 'react'

export const Box = ({value, onClick}) => {
    const style = value === 'X' ? "text-red-500" : "text-blue-500"
    const classes = `${style} bg-white border-none rounded shadow w-20 h-20 text-center text-6xl font-bold leading-10 m-2 hover:shadow-lg`
  return (
    <button 
        onClick={onClick} 
        className={classes}
    >
        {value}
    </button>
  )
}