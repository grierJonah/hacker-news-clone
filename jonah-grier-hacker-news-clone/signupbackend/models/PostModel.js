const mongoose = require('mongoose');

const postTemplate = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url_link: {
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

