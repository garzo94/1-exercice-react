// Entendiendo props.children

import React from 'react'

export default function Ejemplo4(props) {
  return (
    <div>
        <h2>Nombre: {props.nombre}</h2>
        
        {/* <h1>{props.children}</h1> */}

    </div>
  )
}
