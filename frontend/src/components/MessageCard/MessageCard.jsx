import React from 'react'
import './MessageCard.scss'
import moment from 'moment'

const MessageCard = ({ firstName, lastName, time }) => {
    const convertedTime = moment(time).format("HH:mm")
    const covertedDate = moment(time).format("MMM DD yyy")
    return (
        <div className="message_card_container">
            <div className="message_card_wrapper">
                <div className="left_sec"><img src="https://i.pinimg.com/originals/3c/0e/7f/3c0e7f6a2efd1777294c551cb51e6010.jpg" /></div>
                <div className="right_sec">
                    <div className="name_sec">
                        {firstName} {lastName}
                    </div>
                    <div className="time_sec">
                        <p>{convertedTime}</p>
                        <p className='date'>{covertedDate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageCard