import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import RegisterFormik from '../components/pure/forms/RegisterFormik'
import Login from '../pages/auth/Login'
import Home from '../pages/home/Home'
import RequireAuth from './RequireAuth'
import TaskListComponent from '../components/container/Task-list'

export default function Routing161718() {
  return (
    <Router>
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<RegisterFormik/>}/>

            <Route  element={<RequireAuth/>}>
                <Route path='/tasks' element={<TaskListComponent/>}/>
            </Route>
        </Routes>

    </Router>
  )
}
