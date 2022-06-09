import React, {useState} from 'react'

export default function Ejemplo1() {

    // valor inicial para un contador
    const valorInicial = 0;
    // valor inicial para unapersona
    const personaInicial = {
        nombre:'Martin',
        email: 'martgin@imagin.com'
    }

    /**
     * Queremos que el VALOR INICIAL Y PERSONA INDICIAL sea parte del estado del componente, 
     * para gestionar su cambio y que se vea reflejado en la vista del componente
     * const [nombreVarialbe, function Cambiar] = useState(valorinicial)
     */

    const [counter, setCounter] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)


    /**
     * Funcion para actualizar el estado privado
     */
    function increaseCounter(){

        setCounter(counter + 1)
    }

    function updatedPerson (){
        setPersona({nombre:'Pepe',
                    email: 'pepe@gail.com'})
    }


  return (
    <div>
        <h1>Use State in action</h1>
        <h2>Contador: {counter} </h2>
        <h2>Datos</h2>
        <h3>Nombre: {persona.nombre}</h3>
        <h3>Email: {persona.email}</h3>
        {/* Buttons */}
        <button onClick={increaseCounter}>Increase</button>
        <button onClick={updatedPerson}>Update Person</button>
    </div>
  )
}
