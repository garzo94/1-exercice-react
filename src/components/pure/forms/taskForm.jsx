import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {Levels} from '../../../models/Levels'
import { Task } from '../../../models/task.class';

export default function TaskForm({add, length}) {
  console.log(Levels)
  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const levelRef = useRef(Levels.Normal)

  function addTask(e){
    e.preventDefault();
    const newTask = new Task(nameRef.current.value,descriptionRef.current.value, levelRef.current.value, false)
    add(newTask)
  }


  const normalStyle = {
    color: 'blue',
    fontWeight:'bold'
  }

  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
        <div className='from-outline flex-fill'>

            <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Name'/>
            <input ref={descriptionRef} id='description' type='text' className='form-control form-control-lg' required placeholder='Description'/>
            <label htmlFor='selectLevel' className='sr-only'>Priorotu</label>
            <select ref={levelRef} defaultValue={Levels.Alto } id='selectLevel'>
              <option value={Levels.Normal}>
                 Normal
              </option>
              <option value={Levels.Medio}>
                 Medio
              </option>
              <option value={Levels.Alto}>
                 Alto
              </option>
            </select>
            <button type='submit' className='btn btn-succes btn-lg ms-2'>
              {length >0 ? 'Add more tasks': 'Add a new task'}
              </button>
        </div>

    </form>
  );
}

TaskForm.protoTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}
