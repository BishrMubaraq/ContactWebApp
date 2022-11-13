import React, { useEffect, useState } from 'react'
import ContactCard from '../ContactCard/ContactCard'
import './ContactsContent.scss'
import axiosInstance from '../../utils/axiosInstance'

const ContactsContent = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        try {
            axiosInstance.get('/contacts').then((response) => {
                setContacts(response.data.contacts);
            })
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <div className="contact_container">
            <div className="contact_wrapper">
                <div className="top_sec">
                    <h1>{contacts.length} contacts</h1>
                </div>
                <div className="bottom_sec">
                    {
                        contacts.map((contact) => (
                            <ContactCard key={contact.id} id={contact.id} firstName={contact.firstName} lastName={contact.lastName} phoneNumber={contact.phoneNumber} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ContactsContent