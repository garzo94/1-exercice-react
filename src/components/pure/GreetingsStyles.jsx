import React, { useState } from 'react'

// Style for users logged in
const loggedStyle = {
    color: "white"
};

// Style for user unlogged in
const unloggedStyle = {
    color: "tomato",
    fontweight: 'bold'
}

export default function GreetingsStyles(props) {

// Controlamos si esta o no logeado
const [logged, setlogged] = useState(false)

const greetingsUser = () =>( <p>Hola {props.name} </p>)
const loggin = () => (<p>Logeate chingada madre</p>)
  return (
    <div style={ logged ? loggedStyle : unloggedStyle}>
        {logged ? <p>Hola {props.name}</p>: <p>Logeate chingada madre</p> }
        <button onClick={() => { setlogged(!logged)}}>
            { logged ? "Logout" : "Login"}
        </button>
    </div>
  )
}
