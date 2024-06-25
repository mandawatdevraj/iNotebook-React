const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const Userschema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        reqiuired: true,
    },
    date: {
        type: Date,
        default: Date.now
    },

});
const User = mongoose.model('user', Userschema);
module.exports = User