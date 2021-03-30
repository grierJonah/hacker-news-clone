const mongoose = require('mongoose');

const postCommentTemplate = new mongoose.Schema({
    body: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('commentsTable', postCommentTemplate);