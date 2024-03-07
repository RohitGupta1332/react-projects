import { useState, useCallback, useEffect, useRef } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [charater, setCharacter] = useState(false);
  const [number, setNumber] = useState(false);
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (charater) str += "!@#$%^&*`.,_-:;+=~?\"\'\\|{}[]<>/"
    if (number) str += "1234567890"
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length)
      pass += str.charAt(index)
    }
    setPassword(pass)
  }, [length, charater, number, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, charater, number])
  
  const passwordRef = useRef(null)

  const copyPassword = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }
  
  return (
    <>
      <div className="d-flex flex-column mb-3 container">
        <h2 className="password-head">Password Generator</h2>
        <div className="input">
          <input className='input-screen' type="text" placeholder='Password' value={password} readOnly ref={passwordRef}/>
          <button className='btn1' onClick={copyPassword}>Copy</button>
        </div>
        <div className="footer">
          <input type="range" min={6} max={20} onChange={(e) => setLength(e.target.value)} />
          <label >Length: {length}</label>
          <input type="checkbox" name='char' onChange={() => setCharacter(!charater)} />
          <label htmlFor="char">Characters</label>
          <input type="checkbox" name='number' onChange={() => setNumber(!number)} />
          <label htmlFor="number">Numbers</label>
        </div>
      </div >
    </>
  )
}
export default App
