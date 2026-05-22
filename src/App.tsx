import { BrowserRouter as BrowserRouter } from 'react-router-dom';
import Board from "./Board"
import Rain from "./Rain"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="bg">
        <Board />
        <Rain />        
      </div>
    </BrowserRouter>
  )
}


export default App