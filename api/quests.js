import express from 'express';

import models from '../models';
import { getQuestsByName } from './utils';

const router = express.Router();

router.get('/', function (req, res) {
    models.Quest.findAll()
        .then(quests => res.json(quests));
});

router.get('/id/:id', function (req, res) {
    const id = req.params.id;
    models.Quest.findById(id)
        .then(quest => {
            res.json(quest);
        });
});

router.get('/place/id/:id', function (req, res) {
    const id = req.params.id;
    models.Quest.findById(id)
        .then(places => {
            return places.getPlaces();
        }).then(place => {res.json(place)});
});


router.get('/name/:name', function (req, res) {
    models.Quest.findAll()
        .then(quests => res.json(getQuestsByName(quests, req.params.name)));
});

export default router;
