import React, {useState} from 'react'



export default function Cuadrado() {

  const [color, setColor] = useState('black')

  

    let red = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let green = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    let blue = Math.floor(Math.random() * (255 - 0 + 1)) + 0;

   
  

  function changeColor(){
    setColor(`rgb(${red},${green},${blue})`)
     

  }

  function blackColor(){
    setColor(`black`)
  }

  function stopColor(){
    setColor(`black`)
  }


  return (
    
            <div 
            onMouseEnter={changeColor} 
            onMouseLeave={blackColor} 
            onDoubleClick={stopColor}  
             
            style={{width:'255px', 
                  height:'255px',
                  backgroundColor:color}}>

            </div>
       
  )
}
