import React from 'react'
import LayOut from './components/LayOut/LayOut'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home'



const routers = createBrowserRouter([{
  path:"",element:<LayOut/>,children:[
    {index:true,element:<Home/>},
    {path:"home",element:<Home/>},
    {path:"about",element:<About/>},
    {path:"portfolio",element:<Portfolio/>},
    {path:"contact",element:<Contact/>},
    {path:"*",element:<NotFound/>}
  ]
}])
export default function App() {
  return (
    <>
   <RouterProvider router={routers}></RouterProvider>
    </>
  )
}
