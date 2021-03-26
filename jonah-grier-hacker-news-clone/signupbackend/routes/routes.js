const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
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

module.exports = router