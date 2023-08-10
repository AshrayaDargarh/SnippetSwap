import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Create from './components/Create'
import View from './components/View'
import Profile from './components/Profile'
import Error from './components/Error'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import SignInUp from './components/SignInUp'
import { createBrowserRouter,Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(true)

  return (
    <>
     <Header/>
     <Outlet/>
    </>
  )
}
export const appRouter=createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<Error/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:'signinup',
      element:<SignInUp/>
    },
    {
      path:"/create",
      element:<Create/>
    },
    {
      path:"/view",
      element:<View/>
    },
    {
      path:"/profile",
      element:<Profile/>
    }
  ]
}])
export default App
