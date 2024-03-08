import styles from './App.module.css'
import Button from './components/Buttons';
import { useState } from 'react';
function App() {
 
  const btn = ['C', '1', '2', '+', '3', '4', '5', '-', '6', '7', '8', '*', '9', '0','/', '=',  '.'];
  const [display, setDisplay] = useState('')

  return (
    <div className={styles.calculator}>
     <input className={styles.display} value={display} type="text" disabled />
      <div className={styles.buttonsContainer}>

        <Button buttonKey={btn} setDisplay={setDisplay} display={display}></Button>

      </div>
    </div>
  )
}

export default App
