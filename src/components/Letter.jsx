import React from 'react'
import {useContext} from 'react'
import {AppContext} from '../App'
function Letter({AttemptVal,LetterPos}){
   const {board,setBoard}=useContext(AppContext)
   const letter=board[AttemptVal][LetterPos]
    return (
        <div className="letter">
           {letter}
        </div>
    )
}
export default Letter;