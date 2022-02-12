const mongoose = require('mongoose');



const Register = new mongoose.Schema({
    Name: {
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
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Register', Register);