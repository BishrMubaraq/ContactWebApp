import React, { useState } from 'react'
import './ComposeMessageContent.scss'
import { useLocation } from 'react-router-dom'
import axiosInstance from '../../utils/axiosInstance'
import { toast } from 'react-toastify'

const ComposeMessageContent = () => {
    const { state } = useLocation()
    const { firstName, lastName, phoneNumber, id } = state
    const otp = Math.floor(100000 + Math.random() * 900000)
    const message = `Hi, Your OTP is : ${otp}`
    const sendOtp = () => {
        axiosInstance.post('/contacts/send-sms', {
            firstName, lastName, phoneNumber, id, message
        }).then((response) => {
            toast.success(response.data)
        }).catch((error) => {
            toast.error(error)
        })
    }
    return (
        <div className="compose_message_container">
            <div className="compose_message_wrapper">
                <div>
                    <h3>Compose Message</h3>
                </div>
                <div className='form'>
                    <input type="text" readOnly value={message} />
                    <button onClick={sendOtp}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default ComposeMessageContent