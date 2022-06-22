import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { filterTodos } from './todoSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';


const Filter = () => {
    const optionRef =  useRef('')
    
    const dispatch = useDispatch()
    const filter = useSelector((state)=> state.todos.filter)

   
    
    const valueRef = ()=>{
        
        const value = optionRef.current.value
        
        dispatch(filterTodos(value))
        console.log(filter)
    }

    
   
   

    

   
        // const todos = useSelector(filterTodos(value)) 

    return (

        <select id="filterTodos"  ref={optionRef} onChange={valueRef} >
                    <option value='All'>All</option>
                    <option value='Completed'>Completed</option>
                    <option value='noCompleted'>No Completed</option>
                    
                </select>
       
    );
};





export default Filter;
