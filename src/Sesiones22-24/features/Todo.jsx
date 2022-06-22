import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { todoToggled } from './todoSlice'



const Todo = ({  completed, text, id }) => {
    const dispatch = useDispatch()
    
    return (
        <li onClick={()=>dispatch(todoToggled(id))} 
        style={
            {
                textDecoration: completed ? 'line-through': 'none',
                textDecorationColor: completed ? 'green' : 'none',
                color: completed ? 'green' : 'brown' ,
                fontSize: '20px',
                fontWeight: '500' 
            } 
        }>
            {text}
        </li>
    );
}

Todo.propTypes = {
    
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Todo;
