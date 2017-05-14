import express from 'express';

import models from '../models';
import { catchAsync, normalize } from './utils';

const router = express.Router();

async function getUserForComment(comment) {
    return models.User.findById(comment.UserId)
        .then(x => {comment.username = x.username;console.log(x);})
        .catch(() => comment.username = 'DELETED');
}

router.get('/quest/:id', catchAsync(200, async req => {
    let questComments = await models.Comment.findAll({where: {QuestId: req.params.id}});
    questComments = normalize(questComments);
    await Promise.all(questComments.map(getUserForComment));
    return questComments;
}));

router.post('/quest/:id', catchAsync(201, async req => {
    let comment = await models.Comment.create(req.body);
    comment.setQuest(req.params.id);
    comment.setUser(req.body.userId);
    comment = normalize(comment);
    let user = await models.User.findById(req.body.userId);
    comment.username = user.username;
    return comment;
}));

export default router;
