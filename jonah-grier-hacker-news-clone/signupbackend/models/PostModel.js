const mongoose = require('mongoose');
const user = require('./SignUpModels');

const postTemplate = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: false
    },
    body: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('postTable', postTemplate);

