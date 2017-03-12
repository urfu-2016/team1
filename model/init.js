'use strict';
var Sequelize = require('sequelize');
var pg = require('pg');

module.exports.init = function (callback) {
    var dbName = 'quest';
    var username = 'postgres';
    var password = 'qwer';
    var host = 'localhost';

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
};
