'use strict';
const express = require('express');
const database = require('../model/database');

const router = express.Router();

router.get('/', function (req, res) {
    database.Quest.findAll()
        .then(res.json);
});

router.get('/id/:id', function (req, res) {
    const id = req.params.id;
    database.Quest.findById(id)
        .then(res.json);
});

router.get('/name/:name', function (req, res) {
    const name = req.params.name;
    database.Quest.findAll()
        .then(quests => {
            res.json(quests.filter(quest => quest.title.toLowerCase().startsWith(name.toLowerCase())));
        });
});

module.exports = router;
