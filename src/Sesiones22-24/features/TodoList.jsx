import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { selectAllTodos } from './todoSlice';
import { useSelector } from 'react-redux/es/exports';

const TodoList = () => {
    const status = useSelector((state)=> state.todos.filter)

    const todos = useSelector((state)=>{
        
        const all = state.todos.todos
        
        if(status==='All'){
            return all
        }else if ( status==='Completed'){
            return all.filter(todo => todo.completed === true)
        }else if(status ==='noCompleted'){
            return all.filter(todo => todo.completed === false)
        }
     })

     
    
    return (
        <div>
            <h1>Your TODOs</h1>
            <ul>
                {todos.map(todo => 
                    (
                        <Todo key={todo.id} {...todo}/> // id, text, completed/>
                    )
                )}

            </ul>
            
        </div>
    );
}


export default TodoList;
