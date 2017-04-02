'use strict';
const Sequelize = require('sequelize');
const initializeDb = require('./init').init;

initializeDb(function (sequelize) {
    const quest = sequelize.define('quest', {
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
        .then(function () {
            quest.create({
                title: 'SecondQuest',
                description: 'Lets play to this facking quest hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha ................................ bla bla bla bla'
            });
        })
        .then(function () {
            quest.create({
                title: 'ThirdQuest',
                description: 'Lets play to this facking quest hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha ................................ bla bla bla bla'
            });
        })
        .then(function () {
            quest.create({
                title: 'FourthQuest',
                description: 'Lets play to this facking quest hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha ................................ bla bla bla bla'
            });
        })
        .then(function () {
            quest.create({
                title: 'FifthQuest',
                description: 'Lets play to this facking quest hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha ................................ bla bla bla bla'
            });
        })
        .then(function () {
            quest.create({
                title: 'SixthQuest',
                description: 'Lets play to this facking quest hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha hahaha ................................ bla bla bla bla'
            });
        })
        .catch(function (err) {
            throw err;
        });

    module.exports.Quest = quest;
});
