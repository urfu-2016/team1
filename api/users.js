import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

function createToken(user) {
    return jwt.sign(user, 'kek');
}

router.post('/register', function (req, res) {
    let token = createToken(req.body.user);
    res.status(201).send({token});
});

export default router;
