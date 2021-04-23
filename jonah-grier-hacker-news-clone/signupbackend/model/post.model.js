const mongoose = require("mongoose");
const PostSchema = require('../schema/post.schema');

const PostModel = mongoose.model("posts", PostSchema);

function addBlogPost(post) {
    return PostModel.create(post);
}

function addUrlPost(post) {
    return PostModel.create(post);
}

function getPostByPostName(title) {
    return PostModel.findOne({title: title}).exec();
}

function getPostByUsername(username) {
    return PostModel.findOne({username: username}).exec();
}

function getPostById(id) {
    return PostModel.findOne({_id: id}).exec();
}

function deletePost(id) {
    return PostModel.deleteOne({_id: id});
}

 function getAllPosts() {
    return PostModel.find().exec();
}

module.exports = {
    addBlogPost,
    addUrlPost,
    getPostByPostName,
    getPostByUsername,
    getPostById,
    deletePost,
    getAllPosts,
};