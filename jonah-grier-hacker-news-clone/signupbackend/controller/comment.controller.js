const express = require('express');
const router = express.Router();
const CommentModel = require('../model/comment.model');

router.post('/add_comment', (req, res) => {
    console.log("Adding comment:", req.body);
    if(!req.body.body) {
        return res.status(404).send({message: "Comment must contain body!"});
    }
    return CommentModel.addComment(req.body)
        .then((success) => res.status(200).send(success)),
        (error) => res.status(500).send(error)
});

router.get('/get_comments', (req, res) => {
    console.log("Getting all comments", req.body);
    return CommentModel.getAllComments()
        .then(post => (res.status(200).send(post)),
        (error) => console.log(`Error receiving posts: ${error}`))
})

router.get('/get_comments/:title', (req, res) => {
    console.log('Getting comments by title', req.body);
    return CommentModel.getCommentByTitle(req.params.title)
        .then(comment => (res.status(200).send(comment)),
        error => res.status(500).send(error));
});

module.exports = router;