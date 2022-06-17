import React from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Invalid email format')
                .required("Email required"),
        password: Yup.string().required('Password is required')
    }
)

export default function LoginFormik() {
    const initialCredentials = {
        email:'',
        password:''
    }
  return (
    <div>
        <h4>Login Formik</h4>
        <Formik
        initialValues = {initialCredentials}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              localStorage.setItem("credentials", values)
            }, 1000);
          }}
        >

           

                {({errors, touched, isSubmitting}) =>(
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" type="email" placeholder="Jane" />
                        {errors.email && touched.email && (<ErrorMessage name="email" component="div"/>)}
                        

                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" type="password" placeholder="Doe" />
                       

                        
                        <button type="submit">Submit</button>
                        {isSubmitting ? <p>Login your credentials</p> : null}
                    </Form>
                )}

                   

                
            
            

        </Formik>

    </div>
    
  )
}
