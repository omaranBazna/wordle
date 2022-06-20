import Board from './components/Board'
import Keyboard from './components/Keyboard'
import Test from './components/Test'
import './App.css';
import Data from './Data'
import {useState} from 'react'


function App() {
  const [board,setBoard]=useState(Data)
  return (
    <div className="App">
    <nav>
     <h1> لعبة الكلمات</h1>
      </nav>
      <Board />
       <Keyboard />
    </div>
  );
}

export default App;
