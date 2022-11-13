import React from 'react'
import ContactInfoContent from '../../components/ContactInfoContent/ContactInfoContent'
import Layout from '../../components/Layout/Layout'

function ContactInfo() {
  return (
    <>
    <Layout children={<ContactInfoContent/>} />
    </>
  )
}

export default ContactInfo