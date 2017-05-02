import express from 'express';
import passport from '../passport/index';

const router = express.Router();

router.get('/vk',
    passport.authenticate('vk', {
        scope: ['email']
    }));

router.get('/vk/callback',
    passport.authenticate('vk', {
        failureRedirect: '/'
    }),
    function (req, res) {
        console.info(res.email);
        res.redirect('/');
    });

router.get('/fb',
    passport.authenticate('fb', {
        scope: ['email']
    }));

router.get('/fb/callback',
    passport.authenticate('fb', {
        failureRedirect: '/'
    }),
    function (req, res) {
        res.redirect('/');
    });

router.get('/user', (req, res) => {
    res.json(req.user);
});

router.get('/log-out', (req, res) => {
    req.logout();
    res.redirect('/');
});

export default router;
