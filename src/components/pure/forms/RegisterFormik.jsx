import React from 'react'
import User from '../../../models/user.class'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import { ROLES } from '../../../models/roles'
import { useNavigate } from 'react-router-dom'

export default function RegisterFormik() {

    const navigate = useNavigate()

    let user = new User()

   

    const initialValues = {
        username: "",
        email: '',
        password:'',
        confirm: '',
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(

       { 
        username : Yup.string()
        .min(6, 'usernmae just 6 charracteres')
        .max(10, 'max 10 characteres')
        .required(),
        email: Yup.string(),
        role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN]),
        password: Yup.string()
          .min(8, 'min of 8 characteres'),
        confirm: Yup.string()
           .when("password", {
            is: value => (value && value.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Password must match"
            )
           })
    }

    )
  return (
    <div>
        <h4>Register Form</h4>
        <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              localStorage.setItem("credentials", values)
            }, 1000);
          }}>

            
                    {({errors, touched, isSubmitting}) =>(
                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field id="username" name="username" type="text" placeholder="username" />
                        {errors.username && touched.username && (<ErrorMessage name="email" component="div"/>)}
                        

                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" type="email" placeholder="Doe" />
                        {errors.email && touched.email && (<ErrorMessage name="email" component="div"/>)}

                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" type="password" placeholder="Doe" />
                        {errors.password && touched.password && (<ErrorMessage name="password" component="div"/>)}

                        <label htmlFor="confirm">Confirm</label>
                        <Field id="confirm" name="confirm" type="password" placeholder="Doe" />
                        {errors.confirm && touched.confirm && (<ErrorMessage name="confirm" component="div"/>)}

                        
                        <button type="submit">Submit</button>
                        {isSubmitting ? <p>Login your credentials</p> : null}
                        {' '}

                        <button onClick={() => navigate('/login')}>Go to Login</button>
                    </Form>
                )}


        </Formik>
    </div>
  )
}
