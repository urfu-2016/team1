'use strict';

import {Strategy as AuthVKStrategy} from 'passport-vkontakte';
import {Strategy as AuthFBStrategy} from 'passport-facebook';
import passport from 'passport';
import models from '../models';

const VK_ID = parseInt(process.env.VK_ID);
const VK_SECRET = process.env.VK_SECRET;
const FB_ID = parseInt(process.env.FB_ID);
const FB_SECRET = process.env.FB_SECRET;


passport.use('fb', new AuthFBStrategy({
        clientID: FB_ID,
        clientSecret: FB_SECRET,
        callbackURL: '/api/auth/fb/callback',
        profileFields: [
            'id',
            'displayName',
            'profileUrl',
            'photos'
        ]
    },

    function (accessToken, refreshToken, profile, done) {
        models.User.findOrCreate({
            where: {fbId: profile.id.toString()},
            defaults: {username: profile.displayName, photo: profile.photos[0].value, isAdmin: false}
        })
            .spread((user, created) => {
                return done(null, {
                        fbId: user.fbId,
                        username: user.username,
                        photo: user.photo
                    }
                )
            })
    }
));

passport.use('vk', new AuthVKStrategy({
        clientID: VK_ID,
        clientSecret: VK_SECRET,
        callbackURL: '/api/auth/vk/callback'
    },

    function (accessToken, refreshToken, profile, done) {
        models.User.findOrCreate({
            where: {vkId: profile.id.toString()},
            defaults: {username: profile.displayName, photo: profile.photos[0].value, isAdmin: false}
        })
            .spread((user, created) => {
                return done(null, {
                        vkId: user.vkId,
                        username: user.username,
                        photo: user.photo
                    }
                )
            })
    }
));

passport.serializeUser(function (user, done) {
    done(null, JSON.stringify(user));
});


passport.deserializeUser(function (data, done) {
    try {
        done(null, JSON.parse(data));
    } catch (e) {
        done(err)
    }
});

export default passport;

