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

function editPost(title, new_body) {
    return PostModel.findOneAndUpdate({title: title}, {$set: {body: new_body}}, {returnNewDocument: true})
        .then((data) => {console.log("Data successfully edited")},
        error => console.log("Error in model.js", error));
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
    editPost,
    deletePost,
    getAllPosts,
};