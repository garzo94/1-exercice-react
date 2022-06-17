import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'

export default function ProfilePage() {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Profile</h1>
        <button onClick={() => navigate('/home')}>Home</button>
        <button onClick={()=> navigate('/tasks')}>Go to your tasks</button>
      
    </div>
    
  )
}
