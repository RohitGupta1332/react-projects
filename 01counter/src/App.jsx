import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCount] = useState(10)

  const addValue = () => {
    counter = counter + 1
    if(counter > 20){
      counter = 20
    }
    setCount(counter)
  }
  const removeValue = () => {
    counter = counter - 1
    if(counter < 0){
      counter = 0
    }
    setCount(counter)
  }
  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
