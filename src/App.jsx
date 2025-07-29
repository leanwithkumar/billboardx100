import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import GoogleLogin from './GoogleLogin'
import Errorfile from './components/Errorfile'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Home from './Home'

function App() {

const GoogleAuthWrapper = ()=>{
  return(
    <GoogleOAuthProvider clientId='264124323101-pv1kg9s1bjf2fgscq8u83df3t2t85gar.apps.googleusercontent.com'>
      <GoogleLogin></GoogleLogin>
    </GoogleOAuthProvider>
  )
}

  return (
    <>
    <Routes>
      <Route path='/login' element={<GoogleAuthWrapper/>}/>
      <Route path='/' element={<Navigate to='/login'/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='*' element={<Errorfile/>}/>
    

    </Routes>

    </>
  )
}

export default App
