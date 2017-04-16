'use strict';
const pg = require('pg');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', '..', 'config', 'config.json'))[env];
const dbConfig = config.database;
const uriToPostgres = dbConfig.options.dialect + '://' + dbConfig.username + ':' + dbConfig.password
    + '@' + dbConfig.options.host + '/' + dbConfig.options.dialect;

pg.connect(uriToPostgres, function (err, client, done) {
    client.query('CREATE DATABASE ' + config.database.dbName, function (err) {
        client.end();
    });
});
