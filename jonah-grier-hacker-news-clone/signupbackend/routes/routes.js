const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const postTemplateCopy = require('../models/PostModel');
const bcrypt = require('bcrypt');
const { request } = require('express');

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

module.exports = router