const mongooose = require('mongoose');
const CommentSchema = require('../schema/comment.schema');

const CommentModel = mongooose.model("comments", CommentSchema);

function addCommentPost(comment) {
    return CommentModel.create(comment);
}

function deleteCommentPost(username) {
    return CommentModel.deleteOne({username: username});
}

function editCommentPost(username) {
    return CommentModel.findOneAndUpdate({username: username});
}

module.exports = {
    addCommentPost,
    deleteCommentPost,
    editCommentPost
}