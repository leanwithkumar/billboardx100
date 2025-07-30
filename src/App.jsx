import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GoogleLogin from './GoogleLogin'
import Errorfile from './components/Errorfile'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Home from './Home'
import PrivateRoute from './PrivateRoute'
import Algorithms from './components/Algorithms'
import Coresubjects from './components/Coresubjects'
import Development from './components/Development'
import Resource from './components/Resource'

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


    <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Coresubjects />} />
          <Route path='algorithms' element={<Algorithms />}/>
          <Route path='development' element={<Development/>}/>
          <Route path='resource' element={<Resource/>}/>
        </Route>
    </Route>





      <Route path='*' element={<Errorfile/>}/>
    

    </Routes>

    </>
  )
}

export default App
