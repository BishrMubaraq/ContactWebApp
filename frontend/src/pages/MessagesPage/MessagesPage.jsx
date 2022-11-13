import React from 'react'
import Layout from '../../components/Layout/Layout'
import MessageContent from '../../components/MessageContent/MessageContent'

const MessagesPage = () => {
  return (
    <>
    <Layout children={<MessageContent/>} />
    </>
  )
}

export default MessagesPage