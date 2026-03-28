import MagicBall from './components/MagicBall'
import './App.css'
import { useState } from 'react'

function App() {
  const [mode, setMode] = useState(null)

  return (
    <>
    <div className="page">
    {mode === null && (
      <div>
        <h2>Выберите тип шара</h2>
        <div className = "button-container">
        <button onClick={() => setMode("shake")}>С анимацией тряски</button>
        <button onClick={() => setMode("fade")}>Исчезающий текст</button>
        </div>
      </div> 
    )}
      {mode !==null && <MagicBall mode={mode} />}
      </div>
    </>
  )
}

export default App
