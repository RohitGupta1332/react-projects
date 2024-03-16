import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import AllBooks from './components/AllBooks.jsx'
import BookDetails from './components/BookDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
      element: <Home/>
      },
      {
        path: "/allbooks",
        element: <AllBooks/>
      },
      {
        path: "/categories/:category",
        element: <AllBooks/>
      },
      {
        path: "/getbyid/:id",
        element: <BookDetails/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
