const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const postTemplateCopy = require('../models/PostModel');
const postCommentTemplateCopy = require('../models/PostCommentModel');
const bcrypt = require('bcrypt');

router.post('/signup', async (request, response) => {

    const addSalt = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(request.body.password, addSalt);

    const signedUpUser = new signUpTemplateCopy({
        username:request.body.username,
        password:securePassword,
    })
    signedUpUser.save()
        .then(data => {
            response.json(data);
        })
        .catch(error => {
            response.json(error);
        })
})

// Add blog post to database
router.post('/add_post', async (request, response) => {
    const newPost = new postTemplateCopy({
        title: request.body.title,
        url: request.body.url,
        body: request.body.body
    })

    newPost.save()
        .then(data => {
            response.json(data);
        })
        .catch(error => {
            response.json(error);
        })
})

router.post('/add_comment', async(request, response) => {
    const newComment = new postCommentTemplateCopy({
        body: request.body.body
    })

    newComment.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        })
})

router.get('/', (req, res) => {
    postTemplateCopy.find({})
        .then((data) => {
            console.log("Pulled Data:", data);
            res.send(data)
        })
        .catch((error) => {
            console.log("Error:", error);
        })
})



module.exports = router