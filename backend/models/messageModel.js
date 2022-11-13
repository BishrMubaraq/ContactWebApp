const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'firstName is required']
    },
    lastName: {
        type: String,
        required: [true, 'lastName is required']
    },
    userId: {
        type: String,
        required: [true, 'userId is required']
    },
    phoneNumber: {
        type: String,
        required: [true, 'phoneNumber is required']
    },
    message: {
        type: String,
        required: [true, 'Message is required']
    },
    messageSentTime:{
        type:String,
        required:[true,'Message Time is required']
    }
},{timestamps:true})

module.exports=mongoose.model('Messages',messageSchema)