import { useState } from 'react'
import Header from './components/Header'
import Create from './components/Create'
import View from './components/View'
import Profile from './components/Profile'
import Error from './components/Error'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import { createBrowserRouter,Outlet } from 'react-router-dom'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import { AuthProvider } from './context/AuthContext'
function App() {
  const [count, setCount] = useState(true)
  // const token=useLongIn()
  return (
    <>
    
    <div className='bg-slate-900 h-screen text-white'>
    <AuthProvider>
    <Header/>
     <Outlet/>
     </AuthProvider>
    </div>
    
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
      path:'/signup',
      element:<Register/>
    },
    {
      path:'/login',
      element:<Login/>
    },
   {
    path:'/forgotpassword',
    element:<ForgotPassword/>
   },
    {
    path:'/auth/reset-password/:resetToken',
    element:<ResetPassword/>
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
