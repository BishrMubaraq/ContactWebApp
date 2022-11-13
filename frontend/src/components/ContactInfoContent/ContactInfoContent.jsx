import React from 'react'
import './ContactInfo.scss'
import { useLocation, useNavigate } from 'react-router-dom'

const ContactInfoContent = () => {
    const { state } = useLocation()
    const navigate = useNavigate()
    const userDetails = {
        id: state.id,
        firstName: state.firstName,
        lastName: state.lastName,
        phoneNumber: state.phoneNumber
    }
    return (
        <div className="contact_info_container">
            <div className="contact_info_wrapper">
                <h2>Contact Info</h2>
                <hr />
                <h3>
                    <span>Name : </span> {state.firstName} {state.lastName}
                </h3>
                <h3>
                    <span>Phone Number : </span> {state.phoneNumber}
                </h3>
                <button onClick={() => navigate('/compose-message', { state: userDetails })}>Send Message</button>
            </div>
        </div>
    )
}

export default ContactInfoContent