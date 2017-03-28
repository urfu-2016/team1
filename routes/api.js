'use strict';
const express = require('express');
const database = require('../model/database');

const router = express.Router(); // eslint-disable-line

router.get('/quests', function (req, res) {
    database.Quest.findAll()
        .then(function (quests) {
            res.send(JSON.stringify(quests));
        });
});

module.exports = router;
