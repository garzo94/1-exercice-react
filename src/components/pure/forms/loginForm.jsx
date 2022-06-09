import React, { useState } from 'react'

export default function loginForm() {

    const initialCredentials = [
        {
            user: '',
            password: ''
        }
    ]

    const [credentials, setcredentials] = useState(initialCredentials)
  return (
    <div>loginForm</div>
  )
}
