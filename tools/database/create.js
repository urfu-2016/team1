'use strict';
const pg = require('pg');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', '..', 'config', 'config.json'))[env];
const connectToPostgres = `postgres://${config.database.username}:${config.database.password}@${config.database.host}/postgres`;

pg.connect(connectToPostgres, function (err, client, done) {
    client.query('CREATE DATABASE ' + config.database.dbName, function (err) {
        client.end();
    });
});
