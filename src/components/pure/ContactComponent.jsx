import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

function ContactComponent({contact}) {
  return (
    <div>
        <h1>{contact.name}</h1>
        <h2>{contact.lastName}</h2>
        <h3>{contact.email}</h3>
        <h4>{contact.conected ? 'online' : 'offline'}</h4>
    </div>
  )
}

ContactComponent.propTypes = {
    contact : PropTypes.instanceOf( Contact )}

export default ContactComponent
