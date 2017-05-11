import express from 'express';
import models from '../models';

const router = express.Router();

router.get('/', function (req, res) {
    models.User.findAll()
        .then(users => res.json(users));
});

router.get('/id/:id', (req, res) => {
    const id = req.params.id;
    models.User.findById(id)
        .then(user => res.json(user));
});

export default router;
