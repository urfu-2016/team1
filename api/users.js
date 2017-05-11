import express from 'express';
import jwt from 'jsonwebtoken';
import models from '../models';

const router = express.Router();

function createToken(user) {
    return jwt.sign(user, 'kek');
}

router.post('/register', function (req, res) {
    let token = createToken(req.body.user);
    res.status(201).send({token});
});

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
