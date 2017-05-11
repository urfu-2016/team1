import express from 'express';

import models from '../models';
import { catchAsync } from './utils';

const router = express.Router();

router.get('/quest/:id', function (req, res) {
    models.Comment.findAll({where: {QuestId: req.params.id}})
        .then(comments => res.json(comments));
});

router.post('/quest/:id', catchAsync(201, async req => {
    let comment = await models.Comment.create(req.body);
    comment.setQuest(req.params.id);
    return comment;
}));

export default router;
