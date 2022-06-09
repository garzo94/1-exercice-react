import React, {useState} from 'react'
import Child from "../pure/forms/Child"

export default function Father() {
  const [name, setname] = useState('Alex')
  function showMessage (text){
      alert(`Message received: ${text}`)
  }

  function updatename (newName){
     setname(newName)
  }

  return (
    <div style={{background:"tomato"}}>
      <Child name={name} send={showMessage} update={updatename}></Child>
    </div>
  )
}
