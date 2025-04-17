
import { createRoot } from 'react-dom/client'
import './index.css'
import Landing from './components/landing/landing.jsx'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import Home from './components/Home/Home.jsx'
import Layout from './components/Layout/Layout.jsx'
import Timeline from './components/Timeline/Timeline.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Landing/>} />  
    
    <Route path= "/home" element={<Layout/>}>
    <Route path='/home' element={<Home/>}/>
    <Route path='timeline' element={<Timeline/>}/>
    </Route>
    </>

  ),
  {
    
    basename: '/ChronoLog_React'
  }
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>

)
