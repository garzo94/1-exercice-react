import React from 'react'
import {useNavigate } from 'react-router-dom'
import LoginFormik from "../../components/pure/forms/LoginFormik"

export default function Login() {
  const navigate = useNavigate()
  return (
    <>
    <LoginFormik></LoginFormik>
    <button onClick={() => navigate('/register')}>Go to Register</button>
  
    </>
    
  )
}
