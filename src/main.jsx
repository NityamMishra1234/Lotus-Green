import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import Layouts from './Layouts'

import Home from './Components/Home/Home'
import What from './Components/What/What'
import Contect from './Components/Contect/Contect'
import Whoweare from './Whoweare/Whoweare'
import MoreAbout from './Components/MoreAbout/MoreAbout'



const router =createBrowserRouter([
  {
    path : '/',
    element : <Layouts/>,
    children : [

      {
          path : '',
          element : <Home/>
      },
      {
        path : 'What',
        element :<What/>
      },
      {
        path : 'Contect',
        element :<Contect/>
      },
      {
        path : 'Whoweare',
        element : <Whoweare/>
      },
      {
        path : 'MoreAbout',
        element :<MoreAbout/>
      }

     

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
