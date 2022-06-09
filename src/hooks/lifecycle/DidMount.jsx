/**Ejemplo */
import React, { Component, useEffect } from 'react'

export default class DidMount extends Component {
    componentDidMount(){
        console.log('Comportamiento antes de que el componenete sea añadido al DOM')
    }
  render() {
    return (
      <div>
            <h1>DidMount</h1>
      </div>
    )
  }
}





export const DidmountHook = () => {
    useEffect(()=>{
        console.log('Comportamiento antes que el componenete sea a;adido')

    },[])

    return (
        <div>
          <h1>DidMount</h1>
        </div>
    )
}

