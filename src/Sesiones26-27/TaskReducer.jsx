import { RadioButtonUnchecked } from '@mui/icons-material'
import React, {useReducer, useState, useRef} from 'react'
import './style.css'

//Actions
const CREATE = 'CREATE'
const DELETE = 'DELETE'
const SETCOMPLETED = 'SETCOMPLETED'
const FILTER = 'FILTER'

// Iniatial State
const initialState = {
    tasks: [
        {id: 1,task:'mytask',completed: false},
        {id: 2,task:'mytask2',completed: false}
],
   filter: 'All'
}


let id = 2
//Reducer
const taskReducer = (state, action) => {
    
    switch (action.type) {
        
        case CREATE:
            
            return {...state, tasks: [...state.tasks, {id:id++, task: action.payload, completed: false}]}
            
        case DELETE:
            
        // const taskDelete = 
        // state.tasks.find(({id})=> id = action.payload)
            return {...state, tasks: state.tasks.filter((task)=> task.id !== action.payload)}

        case SETCOMPLETED:
            
            // const taskDelete = 
            console.log('que pedo')
            console.log('desde setCompolete', action.payload.completed)
            return {...state, tasks: state.tasks.map(task =>  task.id === action.payload.id ? action.payload : task)}

        case FILTER:
            console.log(action.payload, 'desde el FILTER')
            return {...state, filter: action.payload}
            
    
        default:
            break;
    }
}

export default function TaskReducer() {
    const [id, setid] = useState(1)
    const taskRef = useRef('')
    const [state, dispatch] = useReducer(taskReducer, initialState)

//Onsubmit
    function submitPromise(){
        
         
          const text = taskRef.current.value
        
        return new Promise((resolve, reject)=>{
        if (text !== ''){
            resolve(text)
        }else{
            reject('error')
        }
        })
    }
  function onSubmit(e){
    e.preventDefault()
    submitPromise()
    
    .then((res)=>{
        setid(id+1)
     dispatch({
         type: CREATE,
         payload: res,
         idload:id
     })
    }).catch((err)=> console.log(err))
  }

//filtering todos
const allTodos = state.tasks
let filterTodos;

if(state.filter === 'All'){
  filterTodos = allTodos
}else if( state.filter === 'Completed'){
    console.log(allTodos,'que sii es un array')
    filterTodos = allTodos.filter(todo=> todo.completed === true)
    console.log(filterTodos, 'hola jejejej')
}else if( state.filter === 'noCompleted'){
    filterTodos = allTodos.filter(todo=> todo.completed === false)
}

//Select Refer to read value of every option
const selectRef = useRef('')

  
  console.log(state.filter, 'antes de del return')
    
  return (

    <div className="container" style={{display: 'flex', flexDirection:'column'}}>
        <h6 style={{color:'black'}}>click on task to change status</h6>
        {filterTodos.map((task)=>{
            return (
            <div key={task.id} style={{display:'flex', alignItems:'center', }}>
              <h3 
              style={{marginRight:'15px'}} 
              className={task.completed ? 'completed':'uncompleted'} 
              onClick={()=>{dispatch({type:SETCOMPLETED, payload:{...task, completed: !task.completed}})}}>
                {task.task}
              </h3>
              
              <button onClick={(e)=>{
                e.preventDefault()
                dispatch({
                    type:DELETE,
                    payload: task.id
                })
              }}>Delete</button>
            </div>
            )
                
        })}
        <form onSubmit={onSubmit}>
            <input placeholder='task' type="text" ref={taskRef}></input>
            <button type='submit'>Create Task</button>

        </form>
        <h3>Filter tasks</h3>
        <select id="filterTodos"  ref={selectRef}onChange={()=>dispatch({type:FILTER, payload: selectRef.current.value})} >
                    <option value='All'>All</option>
                    <option value='Completed'>Completed</option>
                    <option value='noCompleted'>No Completed</option>
                    
        </select>

    </div>
    
  )
}
