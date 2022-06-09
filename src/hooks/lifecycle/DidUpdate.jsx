import React, { Component, useEffect } from 'react'

export  class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('cuando el componenete recibe nuevos props o cambio en su estado privado')
    }

  render() {
    return (
      <div>DidUpdate</div>
    )
  }
}



export  function DidUpdate() {

    useEffect(() => {
        console.log('cuando el componenete recibe nuevos props o cambio en su estado privado')
    })
  return (
    <div>DidUpdate</div>
  )
}

