const express = require('express');
const router = express.Router();
const CommentModel = require('../model/comment.model');

router.post('/add_comment', (req, res) => {
    console.log("Adding comment:", req.body);
    if(!req.body.body) {
        return res.status(404).send({message: "Comment must contain body!"});
    }
    return CommentModel.addCommentPost(req.body)
        .then((success) => res.status(200).send(success)),
        (error) => res.status(500).send(error)
});

module.exports = router;