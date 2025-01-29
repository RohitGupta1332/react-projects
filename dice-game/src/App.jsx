import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GamePage from './components/game page/index.jsx'
import Home from './components/home/HomePage.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/game' element={<GamePage/>}/>
      </Routes>
    </Router>
  )
}

export default App
