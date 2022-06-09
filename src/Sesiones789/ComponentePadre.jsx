import React, {useState} from 'react'
import ComponenteHijo from './ComponenteHijo.jsx'
import { Contact } from '../models/Contact'
import ContactForm from './ContactForm.jsx'

export default function ComponentePadre() {
    const contact1 = new Contact('name1',1234,'name1@gmail.com', false)
    const contact2 = new Contact('name2',1234,'name2@gmail.com', true)
    const contact3 = new Contact('name3',1234,'name3@gmail.com', false)

    const [contacts, setcontacts] = useState([contact1, contact2, contact3])

    function contactConected(contact){
        const index = contacts.indexOf(contact)
        const tempContact = [...contacts]
        tempContact[index].conected = !tempContact[index].conected
        setcontacts(tempContact)

    }

    function deleteContact(contact){
        const index = contacts.indexOf(contact)
        const tempContact = [...contacts]
        tempContact.splice(index,1)
        setcontacts(tempContact)

    }

    function createContact(contact){
        
        const tempContact = [...contacts]
        tempContact.push(contact)
        setcontacts(tempContact)

    }

  return (

    <div>
        <table>
            <thead>
                <tr>

                    <th scope='col'>Name</th>
                    <th scope='col'>Phone</th>
                    <th scope='col' style={{textAlign:'center'}}>Email</th>
                    <th scope='col'>Conected</th>
                    <th scope='col'>Delete</th>

                </tr>
                
            </thead>
            <tbody>

                {
                contacts.map((contact, index)=>{
                    return(<ComponenteHijo key={index} contact={contact} conected={contactConected} remove={deleteContact}></ComponenteHijo>)
                    

                })
            }
            </tbody>
        </table>

        <ContactForm create={createContact}/>

        

    </div>
    
  )
}
