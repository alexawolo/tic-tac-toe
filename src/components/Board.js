import React from 'react'
import {Box} from './Box'

export const Board = ({board, onClick}) => {
  return (
    <div className="grid grid-cols-[repeat(3,_6rem)] justify-center place-items-center">
        {board.map((value, index) => {
            return <Box value={value} onClick={() => value === null && onClick(index)}/>
        })}
    </div>
  )
}
