const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(CONNECTION_STRING || process.env.CONNECTION_STRING);

const models = {
    Comment: require('./comment'),
    Like: require('./like'),
    Photo: require('./photo'),
    Place: require('./place'),
    Quest: require('./quest'),
    QuestPlace: require('./quest_place'),
    QuestUser: require('./quest_user'),
    User: require('./user')
};



const db = {};

Object.keys(models).forEach(function(modelName) {
    const model = models[modelName](sequelize, Sequelize.DataTypes);
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
