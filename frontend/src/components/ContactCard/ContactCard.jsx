import React from 'react'
import './ContactCard.scss'
import { useNavigate } from 'react-router-dom'

const ContactCard = ({ firstName, lastName, id, phoneNumber }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`contact-info/${id}`, { state: { firstName, lastName, phoneNumber, id } })} className="contact_card_container">
            <div className="contact_card_wrapper">
                <div className="left_sec"><img src="https://i.pinimg.com/originals/bd/70/22/bd702201a2b6d8960734f60f34a22754.jpg" /></div>
                <div className="right_sec">{firstName} {lastName}</div>
            </div>
        </div>
    )
}

export default ContactCard