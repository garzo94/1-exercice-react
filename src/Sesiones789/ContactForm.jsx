import React, {useRef} from 'react'
import { Contact } from '../models/Contact'

export default function ContactForm({create}) {
    const nameRef =  useRef('')
    const phoneRef = useRef('')
    const emailRef = useRef('')
  function addContact(e){
      e.preventDefault();
      const newContact = new Contact(nameRef.current.value, phoneRef.current.value, emailRef.current.value, false)
      create(newContact)


  }
  return (
      
    <form onSubmit={addContact} style={{marginTop:'25px', display:'flex'}}>
        <input ref={nameRef} type="text" placeholder='Contact Name'/>
        <input ref={phoneRef} type="tel" placeholder='Contact phone number'/>
        <input ref={emailRef} type="email" placeholder='Contact email'/>
        <button type='submit'>Creat Contact</button>

    </form>
  )
}
