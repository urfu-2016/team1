'use strict';
var Sequelize = require('sequelize');
var initializeDb = require('./init').init;

initializeDb(function (sequelize) {
    var quest = sequelize.define('quest', {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });

    quest.sync({ force: true })
        .then(function () {
            quest.create({
                title: 'FirstQuest',
                description: 'no description'
            });
        })
        .catch(function (err) {
            throw err;
        });

    module.exports.Quest = quest;
});
