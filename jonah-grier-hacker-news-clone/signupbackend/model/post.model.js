const mongoose = require("mongoose");
const PostSchema = require('../schema/post.schema');

const PostModel = mongoose.model("posts", PostSchema);

function addBlogPost(post) {
    console.log('Creating a new blog...', post);
    return PostModel.create(post);
}

function addUrlPost(post) {
    console.log('Creating a new url post...', post);
    return PostModel.create(post);
}

function getPostByPostName(title) {
    return PostModel.findOne({title: title}).exec();
}
 function getAllPosts() {
    return PostModel.find().exec();
}

module.exports = {
    addBlogPost,
    addUrlPost,
    getPostByPostName,
    getAllPosts,
};