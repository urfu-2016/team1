import express from 'express';

import models from '../models';

const router = express.Router();

router.get('/quest/:id', function (req, res) {
    models.EntityComment.findAll({where: {QuestId: req.param.id}})
        .then(x => res.json(models.Comment.findAll({
            where: {id : x.map(y => y.CommentId)}
        })));
});

export default router;
