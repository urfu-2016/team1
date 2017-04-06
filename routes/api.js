'use strict';
const express = require('express');
const database = require('../model/database');

const router = express.Router();

router.get('/quests', function (req, res) {
    database.Quest.findAll()
        .then(quests => res.json(quests));
});

router.get('/quests/id/:id', function (req, res) {
    const id = req.params.id;
    database.Quest.findById(id)
        .then(quest => res.json(quest));
});

router.get('/quests/name/:name', function (req, res) {
    const name = req.params.name;
    database.Quest.findAll()
        .then(quests => {
            res.json(quests.filter(quest => quest.title.startsWith(name)));
        });
});

module.exports = router;
