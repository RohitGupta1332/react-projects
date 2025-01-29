import Header from './components/Header'
import Footer from './components/Footer'
import {Outlet} from  'react-router-dom'
import { PostProvider } from './context/PostContext'
import './App.css'

function App() {

  return (
    <>
      <PostProvider>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      </PostProvider>
    </>
  )
}

export default App
