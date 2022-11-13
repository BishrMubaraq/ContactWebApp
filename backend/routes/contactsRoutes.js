const express = require('express')
const router = express.Router()
const { getContacts, sendOtpSms, getMessages } = require('../controllers/contactsController')

router.get('/', getContacts)
router.post('/send-sms', sendOtpSms)
router.get('/get-messages', getMessages)

module.exports = router