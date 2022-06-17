import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Link } from "react-router-dom";

import Home from "./pages/home/Home"
import NotFound404 from "./pages/404/NotFound404"
import AboutPage from './pages/about/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskComponent from './components/pure/task';
import TaskListComponent from './components/container/Task-list';
import { useNavigate } from 'react-router-dom';
import TaskDetail from './pages/tasks/TaskDetail';
import RequireAuth from './pages/auth/RequireAuth';
import Login from './pages/auth/Login';

export default function AppRoutingOne() {
    
  let taskList = [
    {
        id:1,
        name:'Task',
        description:'mydescription'
    }
  ]
    
    
  return (
    <Router>
        <div>
            <aside>
                <Link to='/'>Home || </Link>
                <Link to='/about'>About || </Link>
               
            </aside>
        </div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/about" element = { <AboutPage/>} />
            <Route path="/login" element = { <Login/>} />

             <Route element ={<RequireAuth/>}>
                <Route path="/profile" element = { <ProfilePage/>}/>          
                <Route path="/tasks" element = { <TaskListComponent/>} />
                <Route path="/task/:id" element = { <TaskDetail/>} />

             </Route>
            
            <Route element={<NotFound404/>}/>

            
        </Routes>
    </Router>
  )
}
