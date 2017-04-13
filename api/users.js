'use strict';
const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

function createToken(user) {
    return jwt.sign(user, 'kek');
}

router.post('/register', function (req, res) {
    console.log(req.body.user, req.body.password);
    let token = createToken(req.body.user);
    console.log(token);
    res.status(201).send({token});
});

module.exports = router;
