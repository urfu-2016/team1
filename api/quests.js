import express from 'express';
import models from '../models';

const router = express.Router();

router.get('/', function (req, res) {
    models.Quest.findAll()
        .then(quests => res.json(quests));
});

router.get('/id/:id', function (req, res) {
    const id = req.params.id;
    models.Quest.findById(id)
        .then(quest => res.json(quest));
});

router.get('/name/:name', function (req, res) {
    const name = req.params.name;
    models.Quest.findAll()
        .then(quests => {
            res.json(quests.filter(quest => quest.title.toLowerCase().startsWith(name.toLowerCase())));
        });
});

export default router;
