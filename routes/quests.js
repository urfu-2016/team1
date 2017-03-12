'use strict';
var express = require('express');
var router = express.Router(); // eslint-disable-line
var database = require('../model/database');

router.get('/', function (req, res) {
    database.Quest.findAll()
        .then(function (quests) {
            res.send(JSON.stringify(quests));
        });
});

module.exports = router;
