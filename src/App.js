import { useState } from 'react';
import './App.css';
import Dice from './dice/Dice';

function App() {
  const [result, setResult] = useState(0)
  const status = ''
  const roll = (value, status) =>{
    setResult(value)
  }

  const newRoll = () =>{
    setResult(0)
  }

  return (
    <div className="App">
      <Dice roll={roll} status={status} value={result}/>
      <h3>{result}</h3> 
      <button onClick={newRoll}>Permitir nova jogada</button>
    </div>
  );
}

export default App;
