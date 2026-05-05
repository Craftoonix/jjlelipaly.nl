import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Board from "./Board"
import Rain from "./Rain"
import Resume from './Resume';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <Routes><Route path="/resume" element={<Resume/>}/> </Routes>
      <div className="bg">
        <Board />
        <Rain />        
      </div>
    </BrowserRouter>
  )
}


export default App