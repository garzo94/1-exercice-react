import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {
    componentWillUnmount(){
        console.log('comportamiento antes de que el componenete desaparezca');
    }
  render() {
    return (
      <div>WillUnMount</div>
    )
  }
}



export  function WillUnMount() {
    useEffect(() => {
      
    
      return () => {
        console.log('comportamiento antes de que el componenete desaparezca');
      }
    }, [])
    

  return (
    <div>WillUnMount</div>
  )
}

