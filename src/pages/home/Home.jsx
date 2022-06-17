import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'

export default function Home() {

  const location = useLocation();
  const navigate = useNavigate()

 

 
  return (
    <div>
      <h1>hoME</h1>
      <button onClick={() => navigate('/login')}>Logout</button>
      <button onClick={() => navigate('/register')}>Register</button>
    </div>
  )
}
