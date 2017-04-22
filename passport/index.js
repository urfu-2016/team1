'use strict';

import { Strategy as AuthVKStrategy } from 'passport-vkontakte';
import passport from 'passport';

const VK_ID = parseInt(process.env.VK_ID);
const VK_SECRET = process.env.VK_SECRET;


passport.use('vk', new AuthVKStrategy({
    clientID: VK_ID,
    clientSecret: VK_SECRET,
    callbackURL: '/api/auth/vk/callback'
    },

    function (accessToken, refreshToken, profile, done) {
        return done(null, {
            username: profile.displayName,
            photoUrl: profile.photos[0].value,
            profileUrl: profile.profileUrl
        });
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

