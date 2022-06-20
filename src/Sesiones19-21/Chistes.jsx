import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './chiste.css'
import {Button} from '@mui/material'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';


export default function Chistes() {
  const [chiste, setChiste] = useState(null)
  const [counter, setCounter] = useState({
                                          megusta:0, 
                                          nomeGusta:0
                                        })
 

  const newjoke = ()=>{
    axios.get(`https://api.chucknorris.io/jokes/random`)
    .then((res)=>{
      setChiste(res.data.value)
      
    }).catch((err)=>{
      setChiste(err)
      
    })
   
  }

  

  function meGusta(){
    console.log(counter)
    setCounter({...counter, megusta:counter.megusta+1} )
      newjoke()
      
      
  }

  function NomeGusta(){
   
    setCounter({...counter, nomeGusta:counter.nomeGusta+1} )
    newjoke()
    
    
}
 
  return (
    <div className='body'>
      <h2>Random Joke</h2>
      <div className="container">
        <h4>{chiste}</h4>
      </div>
      <div className="vote">
        <Button  variant="contained" color="error" onClick={meGusta}>Me gusta👍</Button>
        <Button  variant="contained" color="success" onClick={NomeGusta}>No me gusta👎</Button>
        
      </div>
      <button onClick={newjoke} className='btnNext'>{chiste ? 'Next Joke':'See Joke'}</button>
      <h5>Counter</h5>
      <div className="votes">
        
        <button className="megusta" >👍{counter.megusta}</button>
        <button className="noMegusta">👎{counter.nomeGusta}</button>
      </div>

    </div>
  )
}
