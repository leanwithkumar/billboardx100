import React from 'react'
import { useNavigate } from 'react-router-dom'

function Errorfile() {
    const navigate = useNavigate()
  return (
    <>
      <div>
        error 404
      </div>
      <button onClick={()=>navigate('/login')}>back to login</button>

      </>
  )
}

export default Errorfile
