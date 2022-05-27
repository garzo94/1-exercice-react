import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'
import ContactComponent from '../pure/ContactComponent'
import { getDefaultNormalizer } from '@testing-library/react'

function ComponentA() {


    const defaultContact =  new Contact('Juanito','Vazquez', 'juan@gmail.com', false)

    
  return (

    
    <div>
        <ContactComponent contact = {defaultContact}></ContactComponent>
    </div>
  )
}


export default ComponentA
