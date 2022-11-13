import React, { useEffect, useState } from 'react'
import MessageCard from '../MessageCard/MessageCard'
import './MessageContent.scss'
import axiosInstance from '../../utils/axiosInstance'

const MessageContent = () => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    axiosInstance.get('/contacts/get-messages').then((response) => {
      setMessages(response.data)
    }).catch((error) => {
      console.log(error);
    })
  })
  return (
    <div className="message_container">
      <div className="message_wrapper">
        <div className="top_sec">
          <h1>{messages.length} Messages</h1>
        </div>
        <div className="bottom_sec">
          {messages.map((message) => (
            <MessageCard key={message._id} firstName={message.firstName} lastName={message.lastName} time={message.messageSentTime} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MessageContent