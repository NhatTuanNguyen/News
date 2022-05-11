const mongoose = require('mongoose');

const schema = new mongoose.Schema({ 
    link: String,
    slug: String,
    status: String,
    ordering:Number,
    category: String,
    source: String,
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
module.exports = mongoose.model('generalNews', schema);