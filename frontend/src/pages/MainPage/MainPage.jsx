import React from 'react'
import ContactsContent from '../../components/ContactsContent/ContactsContent'
import Layout from '../../components/Layout/Layout'

function MainPage() {
  return (
    <>
    <Layout children={<ContactsContent/>} />
    </>
  )
}

export default MainPage