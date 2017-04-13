'use strict';

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const remoteStatic = require('remote-static');

const api = require('./api');

//server-rendering
import React from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router'
import reducer from './views/redux/reducer/index';
import router from './views/router';
import { initialState } from './views/redux/reducer/initialState';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', process.env.NODE_ENV === 'production'
    ? remoteStatic('https://team1.surge.sh')
    : express.static(path.join(__dirname, 'public')));

app.use('/api', api);

app.get('*', (req, res) => {
    match({ routes: router, location: req.url }, (err, redirect, props) => {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirect) {
            res.redirect(redirect.pathname + redirect.search)
        } else if (props) {
            const store = createStore(reducer, initialState);

            const appHtml = renderToString(
                <Provider store={store}>
                    <RouterContext {...props}/>
                </Provider>
            );

            const preloadedState = store.getState();
            res.send(renderFullPage(appHtml, preloadedState));
        } else {
            res.status(404).send('Not Found')
        }
    })
});

function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width">
        <title>we are effective team</title>
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="index.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="index.js"></script>
      </body>
    </html>
    `
}

app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
