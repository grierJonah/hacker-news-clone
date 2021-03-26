const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')

router.post('/signup', (request, response) => {
    console.log(request.body);
    const signedUpUser = new signUpTemplateCopy({
        username:request.body.username,
        password:request.body.password
    })
    signedUpUser.save()
        .then(data => {
            response.json(data);
        })
        .catch(error => {
            response.json(error);
        })
})

module.exports = router