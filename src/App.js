import Board from './components/Board'
import Keyboard from './components/Keyboard'
import Test from './components/Test'
import './App.css';

function App() {
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
