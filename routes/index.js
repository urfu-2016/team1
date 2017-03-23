'use strict';
const express = require('express');
const path = require('path');

const router = express.Router(); // eslint-disable-line

router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
