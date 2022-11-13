const asyncHandler = require('express-async-handler')
const Contacts = require('../utils/contactsList.json')
const { sendSms } = require('../utils/smsSender')
const Messages = require('../models/messageModel')

// @desc Get contacts
// @route GET /api/contacts/
// @access public
const getContacts = asyncHandler((req, res) => {
    res.status(200).json(Contacts)
})

// @desc Send Otp sms
// @route POST /api/contacts/send-sms
// @access public
const sendOtpSms = asyncHandler(async (req, res) => {
    const { firstName, lastName, id, phoneNumber, message } = req.body
    if (!firstName || !lastName || !id || !phoneNumber || !message) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    const otpSend = await sendSms(message)
    if (otpSend) {
        res.status(200).json('Otp send successfully')
        const dateCreated = otpSend.dateCreated
        const messageBody = otpSend.body
        const addToDatabase = await Messages.create({
            firstName, lastName, phoneNumber, userId: id, message: messageBody, messageSentTime: dateCreated
        })
    } else {
        res.status(400)
        throw new Error('Something went wrong')
    }
})

// @desc get all messaged
// @route POST /api/contacts/get-messages
// @access public
const getMessages = asyncHandler(async (req, res) => {
    const allMessages = await Messages.find().sort({ createdAt: -1 })
    if (allMessages) {
        res.status(200).json(allMessages)
    } else {
        res.status(400)
        throw new Error('Something went wrong')
    }
})

module.exports = {
    getContacts,
    sendOtpSms,
    getMessages
}