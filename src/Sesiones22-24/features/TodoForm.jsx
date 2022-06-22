import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { todoAdded } from './todoSlice';

const Todoform = () => {
    const dispatch = useDispatch()
    const newText = useRef();

    return (
        <div>
            <h2>Create your TODOs</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(todoAdded(newText.current.value))
                newText.current.value = '';
            }}>
                <input type='text' ref={newText}/>
                <button type='submit'>
                    Create Todo
                </button>
            </form>
        </div>
    );
}



export default Todoform;
