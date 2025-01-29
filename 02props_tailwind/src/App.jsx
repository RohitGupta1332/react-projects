import './App.css'
import Card from './components/Card'

function App() {


  return (
    <div className='flex flex-wrap'>
      <Card para="Rohit Gupta" role="Software Developer"></Card>
      <Card para="Sakshi Pandey" role="UI/UX Designer"></Card>
    </div>
  )
}

export default App
