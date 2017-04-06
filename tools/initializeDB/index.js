'use strict';
var Sequelize = require('sequelize');
var pg = require('pg');

const dbName = 'quest';
const username = 'postgres';
const password = 'qwer';
const host = 'localhost';

function getSequelize(connectionString) {
    return new Sequelize(connectionString, {
        dialectOptions: { charset: 'utf8' }
    });
}

var connectionString = process.env.CONNECTION_STRING;
if (connectionString) {
    callback(getSequelize(connectionString));
    return;
}

var connectToPostgres = `postgres://${username}:${password}@${host}/postgres`;
var connectToDb = `postgres://${username}:${password}@${host}/${dbName}`;

pg.connect(connectToPostgres, function (err, client, done) {
    client.query('CREATE DATABASE ' + dbName, function (err) {
        var sequelize = new Sequelize(connectToDb, {
            dialectOptions: { charset: 'utf8' }
        });

        callback(sequelize);
        client.end();
    });
});
