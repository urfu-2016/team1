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

router.get('/quests/id/:id', function (req, res) {
    const id = req.params.id;
    database.Quest.findById(id)
        .then(function(quest) {
            res.send(JSON.stringify(quest));
        });
});

router.get('/quests/name/:name', function (req, res) {
    const name = req.params.name;
    database.Quest.findOne({ where: {title: name} })
        .then(function (quest) {
            res.send(JSON.stringify(quest));
        });
});

router.get('/quests/:name', function (req, res) {
    const name = req.params.name;
    database.Quest.findAll()
        .then(function (quests) {
            res.send(JSON.stringify(quests.filter(function (quest) {
                return quest.title.startsWith(name);
            })));
        });

});

module.exports = router;
