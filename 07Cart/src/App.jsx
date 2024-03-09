import { useContext } from 'react'
import './App.css'
import Items from './components/Items'
import Cart from './components/Cart'

function App() {


  return (
    <>
      <Items name="Iphone" price={10000}></Items>
      <Items name="bOAT Earpods" price={500}></Items>
      <Items name="Macbook" price={5000}></Items>
      <Cart></Cart>
    </>
  )
}

export default App
