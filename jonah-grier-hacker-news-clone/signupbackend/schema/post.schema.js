const Schema = require('mongoose').Schema;

module.exports = new Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: false,
    },
    body: {
        type: String,
        required: false,
    },
    username: { 
        type: String, 
        index: true 
    },
    date: {
        type: Date,
        default: Date.now()
    }
    
}, { collection : 'posttables' });