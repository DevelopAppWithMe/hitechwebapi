let mongoose = require('mongoose')

let ContactUs = mongoose.Schema({
    timestamp: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNum: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('contact', ContactUs)
