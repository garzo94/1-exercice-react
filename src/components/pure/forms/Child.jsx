import React,{useRef} from 'react'

export default function Child({ name, send, update }) {

  const messageRef = useRef('')
  const nameRef = useRef('')

  function pressButton(){
      
      const text = messageRef.current.value;
      alert(`TEXT:${text}`)
  }

  function pressButtonParams(text){
    alert(`Text: ${text}`)
  }

  function submitName(e){
    e.preventDefault();
    update(nameRef.current.value)
  }
  return (
    <div style={{background:"yellow"}}>
      <p onMouseOver={()=> console.log('On mouse Over')}>{`Hello ${name}`}</p>
      <button onClick={()=> console.log('Boton 1 pulsado')}>Boton 1</button>
      <button onClick={pressButton}>Boton 2</button>
      <button onClick={()=>pressButtonParams('hellow')}>Boton 3</button>
      <input 
      placeholder="insert a text" 
      onFocus={() => console.log('input Focus')}
      onChange={(e) => console.log('Input change',e.target.value)}
      onCopy={()=> console.log('Copied text from Input')}
      
      ref= {messageRef}/>
       <button onClick={() =>send(messageRef.current.value)}>send message</button>

       <div style={{margin:'10px'}}>
         <form onSubmit={submitName}>
           <input
           placeholder='New name'
           ref={nameRef}/>
           <button type='submit'>
             Update Name
           </button>
         </form>
       </div>
    </div>
   
  )
}
