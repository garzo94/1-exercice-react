import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import NotFound404 from './pages/404/NotFound404'
import Login from './pages/auth/Login'
import RequireAuth from './pages/auth/RequireAuth'
import Dashboard from './pages/dashboard/Dashboard'
import Home from './pages/home/Home'


export default function AppRoutingFinal() {
  return (
    <Router>
        <Routes>
            <Route element={<RequireAuth/>}>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/' element={<Home/>}/>

            </Route>

            <Route path='/login' element={<Login/>}/>
            <Route component={<NotFound404/>}/>

            
            
        </Routes>
    </Router>
  )
}
