import React from 'react'

export default function ComponenteHijo({contact, conected, remove}) {
  
  return (
    <tr>
        <th><span>{contact.name}</span></th>
        <td><span>{contact.phone}</span></td>
        <td><span>{contact.email}</span></td>
        <td style={{textAlign:'center'}}>
        { contact.conected ?
       ( <i className='bi bi-toggle-on task-action' onClick={()=>conected(contact)} style={{color: 'green'}}></i>) :
        (<i className='bi bi-toggle-off task-action' style={{ color: 'black'}} onClick={()=>conected(contact)} ></i>)
      }
      
        </td>
        <td style={{textAlign:'center'}}><i className='bi-trash task-action' onClick={()=> remove(contact)} style={{color: 'gray'}}></i></td>

    </tr>
  )
}
