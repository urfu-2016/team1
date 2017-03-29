'use strict';
const Sequelize = require('sequelize');
const pg = require('pg');

function getSequelize(connectionString) {
    return new Sequelize(connectionString, {
        dialectOptions: { charset: 'utf8' }
    });
}

module.exports.init = function (callback) {
    const dbName = 'quest';
    const username = 'postgres';
    const password = 'qwer';
    const host = 'localhost';

    const connectionString = process.env.CONNECTION_STRING;
    if (connectionString) {
        callback(getSequelize(connectionString));
        return;
    }

    const connectToPostgres = `postgres://${username}:${password}@${host}/postgres`;
    const connectToDb = `postgres://${username}:${password}@${host}/${dbName}`;

    pg.connect(connectToPostgres, function (err, client, done) {
        client.query('CREATE DATABASE ' + dbName, function (err) {
            const sequelize = new Sequelize(connectToDb, {
                dialectOptions: {charset: 'utf8'}
            });

            callback(sequelize);
            client.end();
        });
    });
};
