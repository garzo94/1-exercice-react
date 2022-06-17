import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

import "../../styles/task.scss"



export default function TaskComponent({ task, completed, remove }) {

    // useEffect(() => {
    //     console.log('Tarea creada')
    //       return () => {
    //         console.log(`Tarea ${task.name}se va a desmontar`)
    //       }
    //     }, [task])

   
    
    function taskLevelBadge(){
  
      switch (task.level){
        case 'Normal':
          return(
            <h6 className='mb-0'>
              <span className='badge bg-primary'>
                {task.level}
              </span>
            </h6>
          )
        case 'Medio':
          return(
            <h6 className='mb-0'>
              <span className='badge bg-warning'>
                {task.level}
              </span>
            </h6>)
        case 'Alto':
          
          return(
            <h6 className='mb-0'>
              <span className='badge bg-danger'>
                {task.level}
              </span>
            </h6>)

        default:
          break

      }
        
    }

   
  return (
    <tr className='fw-normal' style={task.completed ? {color:'green' }: {color:'gray'}}>
      <th>
        <span className='ms-2'>{task.name}</span>
      </th>
      <td className='align-middle'>
        <span>{task.description}</span>
      </td>
      <td className='align-middle'>
        <span>{ taskLevelBadge()}</span>
      </td>
      <td className='align-middle'>
       { task.completed ?
       ( <i className='bi bi-toggle-on task-action' onClick={()=>completed(task)} style={{color: 'green'}}></i>) :
        (<i className='bi bi-toggle-off task-action' style={{ color: 'black'}} onClick={()=>completed(task)} ></i>)
      }
      <i className='bi-trash task-action' onClick={()=> remove(task)}style={{color: 'gray'}}></i>
      </td>
      

    </tr>
   
  )

 
  

}

TaskComponent.prototype ={
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
}



