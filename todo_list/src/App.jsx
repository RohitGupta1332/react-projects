import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import TodoItems from './components/TodoItems'

function App() {
  const [inputs, setInputs] = useState('')
  const [date, setDate] = useState('')
  const [items, setItems] = useState([])

  return (
    <>
      <Input inputText={inputs} setInputs={setInputs} date={date} setDate={setDate} setItems={setItems} items={items}></Input>
      <TodoItems items={items} setItems={setItems}></TodoItems>
    </>
  )
}

export default App
