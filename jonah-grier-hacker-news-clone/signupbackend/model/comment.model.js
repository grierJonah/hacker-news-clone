const mongooose = require('mongoose');
const CommentSchema = require('../schema/comment.schema');

const CommentModel = mongooose.model("comments", CommentSchema);

function addComment(comment) {
    return CommentModel.create(comment);
}

function deleteComment(username) {
    return CommentModel.deleteOne({username: username});
}

function getCommentByTitle(title) {
    return CommentModel.findOne({title: title});
}

function editComment(username) {
    return CommentModel.findOneAndUpdate({username: username});
}

function getAllComments() {
    return CommentModel.find().exec();
}

module.exports = {
    addComment,
    deleteComment,
    editComment,
    getAllComments,
    getCommentByTitle,
}