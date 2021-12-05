'use sttric'
const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    username: String,
    password: String,
    image: Buffer
});
LoginSchema.swaggerName = 'Login';
module.exports = mongoose.model('Login', LoginSchema);