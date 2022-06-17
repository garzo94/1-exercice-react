import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'


  

export default function AboutPage() {

    const location = useLocation();
  const navigate = useNavigate()

  const navigateFunc = (path) => {
    navigate(path)
  }

  const goBack = () => {
    navigate.goBack()
  }

  const goForward = ()=>{
   navigate()
  }
  return (
    <div>
        <h1>ABOUT pAGE</h1>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => goBack()}>goBack</button>
    </div>
  )
}

