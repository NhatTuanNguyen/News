const mongoose = require('mongoose');

const schema = new mongoose.Schema({ 
    name: String,
    username: String,
    email: String,
    birthdate: Date,
    password: String,
    status: String,
    ordering: Number,
    phonenumber: String,
    content: String,
    avatar: String,
    group: {
        id: String,
        name: String,
    },
    created: {
        user_id: Number, 
        user_name: String,
        time: Date,
    },
    modified: {
        user_id: Number, 
        user_name: String,
        time: Date,
    }
});
module.exports = mongoose.model('users', schema);