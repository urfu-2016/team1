import express from 'express';

import models from '../models';

const router = express.Router();

router.get('/quest/:id', function (req, res) {
    models.Comment.findAll({where: {QuestId: req.params.id}})
        .then(comments => res.json(comments));
});

router.post('/quest/:id', function (req, res) {
    models.Comment.create(req.body)
        .then(comment => comment.setQuest(req.params.id))
        .then(() => res.status(201).send({'error': null}))
        .catch(err => res.status(500).send({'error': err}));
});

export default router;
