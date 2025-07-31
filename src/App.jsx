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
import About from './components/About'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import Help from './components/Help'

function App() {

const GoogleAuthWrapper = ()=>{
  return(
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
      <GoogleLogin></GoogleLogin>
    </GoogleOAuthProvider>
  )
}

  return (
    <>
    <Routes>
      <Route path='/login' element={<GoogleAuthWrapper/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/terms' element={<Terms/>}/>
      <Route path='/help' element={<Help/>}/>
      


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
