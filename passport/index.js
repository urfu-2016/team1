import { Strategy as AuthVKStrategy } from 'passport-vkontakte';
import { Strategy as AuthFBStrategy } from 'passport-facebook';
import passport from 'passport';

import models from '../models';

passport.use('fb', new AuthFBStrategy({
        clientID: parseInt(process.env.FB_ID),
        clientSecret: process.env.FB_SECRET,
        callbackURL: '/api/auth/fb/callback',
        profileFields: [
            'id',
            'displayName',
            'photos',
            'cover'
        ]
    },

    function (accessToken, refreshToken, profile, done) {
        models.User.findOrCreate({
            where: {fbId: profile.id.toString()},
            defaults: {username: profile.displayName, photo: profile.photos[0].value, isAdmin: false}
        })
            .spread(user => {
                done(null, {
                    id: user.id,
                    username: user.username,
                    photo: user.photo
                })
            })
    }
));

passport.use('vk', new AuthVKStrategy({
        clientID: parseInt(process.env.VK_ID),
        clientSecret: process.env.VK_SECRET,
        callbackURL: '/api/auth/vk/callback',
        profileFields: ['photo_max']
    },

    function (accessToken, refreshToken, profile, done) {
        models.User.findOrCreate({
            where: {vkId: profile.id.toString()},
            defaults: {username: profile.displayName, photo: profile.photos[0].value, isAdmin: false}
        })
            .spread(user => {
                done(null, {
                    id: user.id,
                    username: user.username,
                    photo: user.photo
                })
            })
    }
));

passport.serializeUser(function (user, done) {
    done(null, JSON.stringify(user));
});

passport.deserializeUser(function (data, done) {
    try {
        done(null, JSON.parse(data));
    } catch (error) {
        done(error)
    }
});

export default passport;
