import express from 'express';
import database from '../model/database';

const router = express.Router();

router.get('/', function (req, res) {
    database.Quest.findAll()
        .then(quests => res.json(quests));
});

router.get('/id/:id', function (req, res) {
    const id = req.params.id;
    database.Quest.findById(id)
        .then(quest => res.json(quest));
});

router.get('/name/:name', function (req, res) {
    const name = req.params.name;
    database.Quest.findAll()
        .then(quests => {
            res.json(quests.filter(quest => quest.title.toLowerCase().startsWith(name.toLowerCase())));
        });
});

export default router;
