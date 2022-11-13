require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// Send sms to a contact
const sendSms = (body) => {
    return new Promise((resolve, reject) => {
        client.messages.create({
            body: body,
            from: '+15136438918',
            to: '+919810153260'
        }).then((message) => {
            resolve(message)
        }).catch((error) => {
            reject(error)
        })
    })
}

module.exports = {
    sendSms
}