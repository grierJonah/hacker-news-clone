const mongooose = require('mongoose');
const CommentSchema = require('../schema/comment.schema');

const CommentModel = mongooose.model("comments", CommentSchema);

function addComment(comment) {
    return CommentModel.create(comment);
}

function deleteComment(id) {
    return CommentModel.deleteOne({_id: id});
}

function getCommentById(id) {
    return CommentModel.findOne({_id: id});
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
    getCommentById,
}