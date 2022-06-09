import React, { Component } from 'react'

class LifeCycleExample extends Component{
    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }

    componentWillMount(){
        console.log('Antes dle montaje del componente')
    }

    componentDidMount(){
          console.log('Justo al momento del montaje')
    }

    componentWillReceiveProps(nextProps){
        console.log('si va a recivir nuevas props')
    }

    shouldComponentUpdate(nextProps, nestState){
        return true
    }

    componentWillUpdate(nextProps, nextState){
        console.log('justo antes de actualizarse')

    }

    componentDidUpdate(prevProps, nprevState){
        console.log('justo despues de actualizarse')

    }

    omponentWillUnmount(prevProps, nprevState){
        console.log('justo antes de desaparecer')

    }
}