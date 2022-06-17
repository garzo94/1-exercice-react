import React, {useEffect} from 'react'
import {Navigate, Outlet} from 'react-router-dom'

export default function RequireAuth() {
  
    let logged = localStorage.getItem('credentials')
    
     
    if (logged){
        return <Outlet></Outlet>
    }
  return (
    
    <Navigate to ={"/login"}/>
    

  )
  
}
