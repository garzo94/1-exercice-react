import React, { useState, useEffect } from 'react'
import {Task} from '../../models/task.class'

import TaskComponent from '../pure/task'
import TaskForm from '../pure/forms/taskForm'





export default function TaskListComponent() {

    const Levels = {
      Normal:'Normal',
      Medio: 'Medio',
      Alto: 'Alto'

      
  }

   
   
    const defaultTask = new Task('Mi tarea','Description',  Levels.Normal , true)
    const defaultTask2 = new Task('Mi tarea2','Description2',  Levels.Medio , false)
    const defaultTask3 = new Task('Mi tarea3','Description3',  Levels.Alto , true)
     //estado del componente
    const [tasks, settask] = useState([defaultTask, defaultTask2, defaultTask3])
    const [loading, setloading] = useState(true)
    // Control del ciclo de vida
    // useEffect(() => {
    //   console.log('Tareas modificadas')
    //   setloading(false);
    
    //   return () => {
    //     console.log('TaskList va a desmontarce') 
    //   }
    // }, [task])
    

    function completeTask(task){
      
      const index = tasks.indexOf(task);
      const tempTask = [...tasks];
      tempTask[index].completed = !tempTask[index].completed;
      
      settask(tempTask);
     

    }

    function deleteTask(task){
      const index = tasks.indexOf(task);
      const tempTask = [...tasks];
      tempTask.splice(index,1) 
      settask(tempTask);

    }

    function addTask(task){
      const index = tasks.indexOf(task);
      const tempTask = [...tasks];
      tempTask.push(task)
      settask(tempTask);

    }

   
  return (
    <div className='col-12'>

      <div className="card">
        <div className='card-header p-3'>
          <h5>
              Your Task:
          </h5>

        </div>
        <div className="card-body" data-mbd-perfect-scrollbar='true' style= {{position: 'relative', heigth:'400px'}}>
          <table>
            
              <thead>
                <tr>
                  <th scope='col'>Title</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Priority</th>
                  <th scope='col'>Actions</th>
                </tr>
                
              </thead>

              <tbody>
                {
                  tasks.map((task, index) => {
                    return (
                      <TaskComponent key={index} task={task} completed={completeTask} remove={deleteTask}></TaskComponent>
                    )
                  })
                }

                
              </tbody>
            
          </table>
        </div>

       

      </div>

      <TaskForm add={addTask}/>
        
        {/* <TaskComponent task={defaultTask}></TaskComponent> */}
    </div>
  )
}



