import './App.css'
import { useState } from 'react'


function App() {
  const [color, setColor] = useState("")

  const changeColor = (color) => {
    setColor(color)
  }

  return (
    <div className="container" style={{ background: color }} >
      <div className="colors" >
      <button style={{backgroundColor: "Red", color: "black"}} onClick={() => changeColor("Red")}>Red</button>
      <button style={{backgroundColor: "Green", color: "black"}} onClick={() => changeColor("Green")}>Green</button>
      <button style={{backgroundColor: "Black", color: "white"}} onClick={() => changeColor("Black")}>Black</button>
      <button style={{backgroundColor: "Yellow", color: "black"}} onClick={() => changeColor("Yellow")}>Yellow</button>
      <button style={{backgroundColor: "Grey", color: "black"}} onClick={() => changeColor("Grey")}>Grey</button>
      </div>

    </div>
  )
}

export default App
