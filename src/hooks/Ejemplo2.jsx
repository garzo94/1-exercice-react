import React, {useState,useEffect, useRef} from 'react'






export default function Ejemplo2() {

    const [counter,setCounter] =useState(0)
    const [counter2,setCounter2] =useState(0)
    // useRef() para asociar una variable con un elemento del DOM del componenet
    const miRef = useRef();
    
    function increase1(){

        setCounter(counter+1)
        

    }

    function increase2(){
        setCounter2(counter2 +2)
    }

    // Use Effect

useEffect(() => {
    console.log('CAMBIO DEL ESTADO');
    console.log('Mostrando Referencia a elemnto el Dom');
    console.log(miRef);
  
    
      
    
  }, [])

  return (
    <div>
            <h1>*** Ejemplo de Use state, ref y effect</h1>
            <h2>contador 1 {counter}</h2>
            <h3>contador 2 {counter2}</h3>
            <h4 ref={miRef}> useRef example</h4>
            <button onClick={increase1}>Increase 1</button>
              
  
        </div>
  )
}

