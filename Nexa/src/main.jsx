import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/index.jsx'
import Intro from './pages/intro.jsx'
import Lost from './pages/404.jsx'

const router = createBrowserRouter([

  {
    path: '/home',
    element: <Index/>,
  },
  {
    path: '/',
    element: <Intro/>,
  },  
  {
    path: '*',
    element: <Lost/>
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
