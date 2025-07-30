import { useGoogleLogin } from '@react-oauth/google'
import React from 'react'
import { googleAuth } from './api'
import { useNavigate } from 'react-router-dom'
import Footer from './components/Footer'

function GoogleLogin() {
  const navigate = useNavigate()

  const responseGoogle = async (authResult) => {
    try {
      if (authResult['code']) {
        const result = await googleAuth(authResult['code'])
        const { email, name, image } = result.data.user
        const token = result.data.token
        const obj = { email, name, image, token }
        localStorage.setItem("user-info", JSON.stringify(obj))
        console.log(result.data.user)
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const googlelogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: 'auth-code'
  })

  return (
    <>
<div className="bg-[#101119] text-white min-h-screen flex flex-col px-10 md:px-40">
  {/* Main content */}
  <div className="flex-1 flex items-center justify-center">
    <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl">
      
      <div className="flex-1 flex justify-end">
        <img
          src="/landingpage.png"
          alt="landing"
          className="w-64 md:w-[800px] object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col items-center md:items-center text-center md:text-left">
        <div className="font-bold text-4xl md:text-5xl mb-6">
          billboardx100
        </div>

        <button
          onClick={googlelogin}
          className="flex items-center gap-3 bg-white text-gray-700 px-3 py-2 rounded-full text-lg font-medium shadow-md hover:bg-gray-100 transition"
        >
          <img src="/google.png" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>
      </div>
    </div>
  </div>

  
  <Footer/>
</div>


    </>
  )
}

export default GoogleLogin
