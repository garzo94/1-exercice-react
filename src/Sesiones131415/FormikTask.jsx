import React from 'react'

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import { Levels } from '../models/Levels'
import {Task} from "../models/task.class"

export default function FormikTask({add}) {

Object.keys(Levels).map(key =>{
    console.log(key)
})

   

    const initialValues = {
        name: "",
        description: '',
        priority:Levels.Medio,
        completed: false
        
    }

    const taskSchema = Yup.object().shape(

       { 
        name : Yup.string()
        .min(6, 'name should not be less than 6 characteres')
        .max(15, 'name should not be more than 15 characteres')
        .required(),
        description: Yup.string().required(),
        priority: Yup.string().oneOf([Levels.Normal, Levels.Medio, Levels.Alto]),
        
    }

    )
  return (
    <div>
        <h4>Task Form</h4>
        <Formik
        initialValues={initialValues}
        validationSchema={taskSchema}
        enableReinitialize={true}
        onSubmit={(values) => {
            const taskForm = new Task(values.name, values.description,  values.priority , values.completed)
            console.log(taskForm)
            add(taskForm)
        
          }}>

            
                    {({errors, touched, isSubmitting, values}) =>(
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field id="name" name="name" type="text" placeholder="name" />
                        {errors.name && touched.name && (<ErrorMessage name="name" component="div"/>)}
                        

                        <label htmlFor="description">Description</label>
                        <Field id="description" name="description" type="text" placeholder="Doe" />
                        {errors.description && touched.description && (<ErrorMessage name="description" component="div"/>)}

                        <label htmlFor="priority">Priority</label>
                        <Field as="select" name="priority">
                            <option disabled value={null}>(Select a priority)</option>
                            {Levels && Object.keys(Levels).map((lev, ind) =>{
                                return <option key ={ind} value={lev}>{lev} </option>
                                
                            })}
                        </Field>

                        <label>
                            <Field type="checkbox" name="completed" />
                            Completed
                        </label>
                        
                        <button type="submit">Agregar Tarea</button>
                        
                    </Form>
                )}


        </Formik>
    </div>
  )
}
