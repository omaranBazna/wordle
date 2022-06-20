import React from 'react'
import {useState} from 'react'
import Data from './Data'
import Letter from './Letter'
function Board(){
const [board,setBoard]=useState(Data)
    return(
        <div className="board">
           <div className="row">
               <Letter LetterPos={0} AttemptVal={0}/>
               <Letter LetterPos={1} AttemptVal={0}/>
               <Letter LetterPos={2} AttemptVal={0}/>
               <Letter LetterPos={3} AttemptVal={0}/>
               <Letter LetterPos={4} AttemptVal={0}/>

           </div>
           <div className="row">
           <Letter LetterPos={0} AttemptVal={1}/>
           <Letter LetterPos={1} AttemptVal={1}/>
           <Letter LetterPos={2} AttemptVal={1}/>
           <Letter LetterPos={3} AttemptVal={1}/>
           <Letter LetterPos={4} AttemptVal={1}/>
            
            </div>
           <div className="row">
           <Letter LetterPos={0} AttemptVal={2}/>
           <Letter LetterPos={1} AttemptVal={2}/>
           <Letter LetterPos={2} AttemptVal={2}/>
           <Letter LetterPos={3} AttemptVal={2}/>
           <Letter LetterPos={4} AttemptVal={2}/>
            
             </div>
           <div className="row">
           <Letter LetterPos={0} AttemptVal={3}/>
           <Letter LetterPos={1} AttemptVal={3}/>
           <Letter LetterPos={2} AttemptVal={3}/>
           <Letter LetterPos={3} AttemptVal={3}/>
           <Letter LetterPos={4} AttemptVal={3}/>
             </div>
           <div className="row">
           <Letter LetterPos={0} AttemptVal={4}/>
           <Letter LetterPos={1} AttemptVal={4}/>
           <Letter LetterPos={2} AttemptVal={4}/>
           <Letter LetterPos={3} AttemptVal={4}/>
           <Letter LetterPos={4} AttemptVal={4}/>
            
             </div>
           <div className="row">
           <Letter LetterPos={0} AttemptVal={5}/>
           <Letter LetterPos={1} AttemptVal={5}/>
           <Letter LetterPos={2} AttemptVal={5}/>
           <Letter LetterPos={3} AttemptVal={5}/>
           <Letter LetterPos={4} AttemptVal={5}/>
            </div>
        </div>
    )
}
export default Board;