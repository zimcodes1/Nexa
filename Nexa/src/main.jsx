import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Index from './pages/index.jsx'
import Intro from './pages/intro.jsx'

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Index/>,
  },
  {
    path: '/',
    element: <Intro/>,
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
