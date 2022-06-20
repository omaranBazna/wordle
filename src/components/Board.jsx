import React from 'react'
import {useState} from 'react'
import Data from './Data'
function Board(){
const [board,setBoard]=useState(Data)
    return(
        <div className="board">
           <div className="row"> </div>
           <div className="row"> </div>
           <div className="row"> </div>
           <div className="row"> </div>
           <div className="row"> </div>
           <div className="row"> </div>
        </div>
    )
}
export default Board;