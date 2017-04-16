"use strict";

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const dbConfig = config.database;

var sequelize = (env === 'development') ?
    new Sequelize(dbConfig.dbName, dbConfig.username, dbConfig.password, dbConfig.options) :
    new Sequelize(process.env.CONNECTION_STRING);

var models = {};

models.Comment = require('./comment');
models.Like = require('./like');
models.Photo = require('./photo');
models.Place = require('./place');
models.Quest = require('./quest');
models.QuestPlace = require('./quest_place');
models.QuestUser = require('./quest_user');
models.User = require('./user');

var db = {};

Object.keys(models).forEach(function(modelName) {
    var model = models[modelName](sequelize, Sequelize.DataTypes);
    db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
