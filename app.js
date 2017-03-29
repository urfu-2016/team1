'use strict';
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const remoteStatic = require('remote-static');

const api = require('./routes/api');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', api);
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.use('/', process.env.NODE_ENV === 'production'
    ? remoteStatic('//team1.surge.sh')
    : express.static(path.join(__dirname, 'public')));

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
